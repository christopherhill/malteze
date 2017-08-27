// import Sitemap, { filterPaths } from 'react-router-sitemap';
// import router from './app/routes';

// new Sitemap(router)
//   .filterPaths({ isValid: false, rules: [/\/auth/, /\/bar/] })
//   .build('http://www.malteze.com')
//   .save('./dist/sitemap.xml');

// getSites(router);
// /*
//  [ '/',
//   '/test',
//   '/posts',
//   '/posts/*',
//   '/article/*',
//   '/tags/*',
//   '/tags/pages',
//   '/tags/pages/*',
//   '/archive',
//   '/archive/*' ]
//  */
// /* router, prefix, save_to_where */
// siteMapBuilder(router, 'http://www.malteze.com', `${__dirname}/dist/sitemap.xml`);
// /* return true of false */

import sm from 'sitemap';
import fs from 'fs';

const outputDir = './dist';

const sitemap = sm.createSitemap ({
  hostname: 'http://malteze.com',
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: '/about/', changefreq: 'daily', priority: 0.3 },
    { url: '/books/', changefreq: 'monthly', priority: 0.7 },
    { url: '/training/', changefreq: 'weekly', priority: 0.5 },
    { url: '/veterinarians/', changefreq: 'daily', priority: 0.2 },
  ],
});

const writeSitemap = (xml) => {
  fs.writeFileSync(`${outputDir}/sitemap.xml`, xml);
};

sitemap.toXML((err, xml) => {
  if (!err) {
    console.log('Generated XML: ', xml); 
    writeSitemap(xml);
    console.log(`Sitemap written: ${outputDir}/sitemap.xml`);
  } else {
    console.log('There was a problem generating the XML.');
  }
});
