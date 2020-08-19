import React from 'react';

const historyItem = (props) => {
  // Object with title, link, content
  console.log(props);
  return (
    <div>
      {/* <p>HistoryItem</p> */}
      <a href={props.url}>{props.title}</a>
    </div>
  );
}

export default historyItem;