import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import Article from '../../components/Article/Article';

import axios from 'axios';

import './Search.css';

const Search = (props) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  useEffect(() => {
    console.log(props);
    return () => (
      console.log('unmounted')
    )
  });

  const handleSubmit = (e, entry) => {
    e.preventDefault();
    if (entry !== '') {
      setLoading(true);
      axios.get('http://en.wikipedia.org/w/api.php',{
        params: {
          format: "json",
          action: "query",
          prop: "extracts",
          exsentences: 10,
          exlimit: 1,
          titles: entry,
          explaintext: 1,
          formatversion: 2,
          origin: "*"
        }
      })
        .then((res) => {
          let title = res.data["query"]["pages"][0]["title"];
          let content = res.data["query"]["pages"][0]["extract"];
          console.log('content', content);
          console.log('title', title);
          setTitle(title);
          setContent(content);
          props.history.push(props.match.url + `/${entry}`)
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }

  return (
    <div>
      <h2>Search for (almost) anything! </h2>
      <SearchForm submit={handleSubmit} submitText="Search!"/>
      {loading
        ? <p>Loading...</p>
        : <Route 
            path={props.match.url + '/:title'} 
            exact 
            render={() => (
              <Article 
              title={title}
              content={content}
            />
            )}/>
      }
    </div>
  )
};

export default Search;