import React from 'react';

import './Article.css';

const Content = (props) => (
  <div className="Article">
    <h1>
      <a 
        id="title"
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
        >
        {props.title}
      </a>
    </h1>
    <p>{props.content}</p>
  </div>
);

export default Content;