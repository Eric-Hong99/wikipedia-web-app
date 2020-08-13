import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import Article from '../../components/Article/Article';

import axios from 'axios';

import './Search.css';

const Search = (props) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [URL, setURL] = useState('');
  
  useEffect(() => {
    console.log('[Search.js] Mounted');
    // console.log(props);
    return () => (
      console.log('[Search.js] Unmounted')
    )
  });

  const handleSubmit = (e, entry) => {
    e.preventDefault();
    let title = '';
    let content = '';
    let pageid = '';
    if (entry !== '') {
      setLoading(true);
      axios.get('http://en.wikipedia.org/w/api.php',{
        params: {
          format: "json",
          action: "query",
          prop: "extracts",
          exsectionformat: "plain",
          exsentences: 10,
          exlimit: 1,
          titles: entry,
          explaintext: 1,
          formatversion: 2,
          origin: "*"
        }
      })
        .then((res) => {
          let page = res.data["query"]["pages"][0]
          title = page["title"];
          content = page["extract"];
          pageid = page["pageid"];
          if (content !== '') {
            setTitle(title);
            setContent(content);
            setURL(`https://en.wikipedia.org/wiki?curid=${pageid}`);
            props.history.push(props.match.url + `/${entry}`)
          }
          else {
            props.history.push(props.match.url + '/invalid');
          }
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
        ? <p style={{ textAlign: "center", marginTop: "30px" }}>Loading...</p>
        : (
        <Switch>
          <Route
            path={props.match.url + '/invalid'}
            exact
            render={() => (
              <p style={{ textAlign: "center", margin: "30px" }}>Sorry, the topic you've searched for had no results :(</p>
            )}
            />
          <Route 
            path={props.match.url + '/:title'}  
            render={() => (
              <Article 
              title={title}
              content={content}
              url={URL}
                />
            )}/>
        </Switch>
        ) 
      }
    </div>
  )
};

export default Search;