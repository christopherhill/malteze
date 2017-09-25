#!/usr/bin/env babel-node --stage=0

import fs from 'fs';
import contentful from 'contentful-management';
import Parser from 'csv-parse';
import prat from 'prat';

const client = contentful.createClient({
  /**
   * Your Management API token. Get one quickly at
   * contentful.com/developers/documentation/content-management-api
   * then set it as an environment variable like
   *
   *     export CONTENTFUL_CMA_TOKEN="abcdef123457890"
   */
  space: 'm2dtj2org70t',
  accessToken: 'CFPAT-3a5c99e6d194ca10a746be700952e072e5752541782c60e063529bb594697fb4',

//  accessToken: '45a19e41fea886374fd635e3d88c8e56f7d0936a10f9bf32c460e6d5ef9b69d2', // process.env.CONTENTFUL_CMA_TOKEN,
});

/**
 * The Content Type ID that matches the rows from the CSV you want to import
 */
const contentTypeId = 'veternarians'; //5aL1iEoPWE44KAcwUOw8M6';

async function main () {
  const space = await client.getSpace('m2dtj2org70t');
  const parser = new Parser({columns: true});
  const rows = fs.createReadStream('./vets.csv').pipe(parser);
  const entries = await prat.ify(rows)
    .map((row) => rowToEntry(space, row))
    .reduce([], (entries, entry) => entries.concat(entry));
  console.log('entries', entries)
}

/**
 * Finds an entry and updates it, or creates a new entry if no existing entry is found.
 * 
 * The update logic simply overwrites the existing fields, a deep merge would
 * be a better strategy if the entries also have fields that are edited by humans.
 */
async function rowToEntry (space, row) {
  const key = row['Name of Clinic'];
  let id = key.replace(/[^a-z0-9]/gi,'');
  if (!id) throw new Error('No ID Value');
  const sys = { id };
  const fields = rowToFields(row);
  try {
    const entry = await space.getEntry(id)
    entry.fields = fields;
    console.log('Update', id, fields);
    return await space.updateEntry(entry);
  } catch (_) {
    console.log('Create', id, fields, contentTypeId);
    return await space.createEntry(contentTypeId, { sys, fields });
  }
}

/**
 * This helper maps a CSV row to the contentful fields structure.
 * Currently it's hard-coded to use en-US, but expanding this script to support
 * multiple locales (maybe by importing different files) would be trivial.
 */
function rowToFields (row) {
  return {
    nameOfClinic: { 'en-US': row['Name of Clinic'] },
    yelpLink: { 'en-US': row['Yelp Link'] },
    website: { 'en-US': row['Website'] },
    address: { 'en-US': row['Address'] },
    city: { 'en-US': row['City'] },
    state: { 'en-US': row['State'] }, 
    zipCode: { 'en-US': row['Zip Code'] },
    email: { 'en-US': row['Email'] },
    phoneNumber: { 'en-US': row['Phone Number'] },
    contactPerson: { 'en-US': row['Contact Person'] },
  };
}

main().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
