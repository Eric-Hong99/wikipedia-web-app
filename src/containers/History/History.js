import React from 'react';
import HistoryItem from '../../components/HistoryItem/HistoryItem';

import classes from './History.module.css';

const History = () => {
  // article : {
  //   title,
  //   url,
  //   content,
  // }
  let history = JSON.parse(window.localStorage.getItem('history'));
  const historyItems = history.map((article, index) => 
    <HistoryItem 
      title={article.title}
      url={article.url}
      content={article.content}
      key={index} />
  )
  
  return (
    <div>
      <h2>Last 20 Searches</h2>
      <div className={classes.HistoryItemsContainer} >
        { historyItems }
      </div>
    </div>
  )
};

export default History;