import React from 'react';
import PropTypes from 'prop-types';

const VeterinarianDetail = (props) => {
  const { 
    nameOfClinic, yelpLink, website, 
    address, city, state, zipCode, 
    email, phoneNumber, contactPerson
  } = props.data;

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="alt attribute" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{nameOfClinic}</strong> <small>{website}</small> <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-reply" /></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-retweet" /></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-heart" /></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

VeterinarianDetail.propTypes = {
  data: PropTypes.array.isRequired,
}
export default VeterinarianDetail;
