import React from 'react';
import PropTypes from 'prop-types';

const ProductDetail = (props) => {
  const {
    name, description, imageLink, productLink, category,
  } = props.data;

  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={imageLink} alt={description} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={imageLink} alt={description} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4"><a href={productLink}>{name}</a></p>
              <p className="subtitle is-6">{category}</p>
            </div>
          </div>
          <div className="content">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProductDetail;
