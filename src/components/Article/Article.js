import React from 'react';

import './Article.css';

const Content = (props) => (
  <div className="Article">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

export default Content;