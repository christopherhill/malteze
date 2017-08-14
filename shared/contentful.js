import * as contentful from 'contentful';
import { config } from './private';

export default class Contentful {
  constructor() {
    this.client = contentful.createClient({
      space: config.SPACE_ID,
      accessToken: config.ACCESS_TOKEN,
    });
    this.getAllResources = this.getAllResources.bind(this);
    this.getAllNews = this.getAllNews.bind(this);
  }

  getAllResources() {
    return this.client.getEntries({
      content_type: '2wKn6yEnZewu2SCCkus4as',
    });
  }

  getAllNews() {
    return this.client.getEntries({
      content_type: 'news',
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
