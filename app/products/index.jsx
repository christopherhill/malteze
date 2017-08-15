import React from 'react';
import PropTypes from 'prop-types';
import Contentful from './../../shared/contentful';
import ProductDetail from './detail';
import './products.scss';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    const contentful = new Contentful();
    contentful.getAllProducts().then((data) => {
      this.setState({ products: data.items });
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <h2 className="subtitle">Products</h2>
        <div className="tags">
          {this.props.type.map(type => <span className="tag is-info capitalize"> {type} </span>)}
        </div>
        <hr />
        <div className="columns is-multiline">
          {this.state.products.length && this.state.products.map((entry) => {
            if (this.props.type.indexOf(entry.fields.category.toLowerCase()) >= 0) {
              return (<ProductDetail key={entry.id} data={entry.fields} />);
            }
          })}
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  type: PropTypes.array,
};

export default Products;
