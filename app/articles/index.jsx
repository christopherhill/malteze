import React from 'react';
import Contentful from './../../shared/contentful';
import Article from './article';
import './articles.scss';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    const contentful = new Contentful();
    contentful.getAllArticles().then((data) => {
      this.setState({ articles: data.items });
    });
  }

  render() {
    debugger
    return (
      <div className="container">
        <br />
        <h2 className="subtitle">Articles</h2>
        <hr />
        <div className="columns is-multiline">
          {this.state.articles.length && this.state.articles.map((entry, i) => {
            return (
              <Article
                key={i}
                data={entry.fields}
              />);
          })}
        </div>
      </div>
    );
  }
}

export default Articles;
