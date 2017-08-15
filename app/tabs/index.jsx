import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => (
  <div className="tabs is-toggle">
    <ul>
      <li className="is-active">
        <Link to="/articles">
          <span className="icon is-small"><i className="fa fa-image" /></span>
          <span>Articles</span>
        </Link>
      </li>
      <li>
        <a>
          <span className="icon is-small"><i className="fa fa-music" /></span>
          <span>Shopping</span>
        </a>
      </li>
      <li>
        <a>
          <span className="icon is-small"><i className="fa fa-film" /></span>
          <span>Videos</span>
        </a>
      </li>
      <li>
        <a>
          <span className="icon is-small"><i className="fa fa-file-text-o" /></span>
          <span>Documents</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Tabs;
