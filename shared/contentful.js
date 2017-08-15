import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN } from './private';

export default class Contentful {
  constructor() {
    this.client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });
    this.getAllResources = this.getAllResources.bind(this);
    this.getAllVeterinarians = this.getAllVeterinarians.bind(this);
  }

  getAllResources() {
    return this.client.getEntries({
      content_type: '2wKn6yEnZewu2SCCkus4as',
    });
  }

  getAllProducts() {
    return this.client.getEntries({
      content_type: 'product',
    });
  }

  getAllArticles() {
    return this.client.getEntries({
      content_type: 'article',
    });
  }

  getAllVeterinarians() {
    return this.client.getEntries({
      content_type: 'veternarians',
    });
  }

  getAllAuthors() {
    return this.client.getEntries({
      content_type: '1kUEViTN4EmGiEaaeC6ouY',
    });
  }

  getResourceById(id) {
    return this.client.getEntries({ 'sys.id': id });
  }
}
