import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const {
    title, body, author, category, image,
  } = props.data;
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={image ? image.fields.file.url : ''} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={image ? image.fields.file.url : ''} alt={title} />
              </figure>
            </div>
            <div className="media-content">
              {/* <p className="title is-4"><a href={productLink}>{name}</a></p> */}
              <p className="subtitle is-6">{author}{category}</p>
            </div>
          </div>
          <div className="content">
            {body}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Article;
