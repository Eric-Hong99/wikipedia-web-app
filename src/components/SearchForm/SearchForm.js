import React, { useState, useEffect } from 'react';

import './SearchForm.css'

const SearchForm = (props) => {
  const [entry, setEntry] = useState('');

  return (
    <>
    <form className="SearchForm"
      onSubmit={(e) => props.submit(e, entry)}
      >
      <input 
        placeholder="Enter anything..."
        type="text"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        />
      <input
        disabled={entry === ''} 
        type="submit" 
        value={props.submitText}
        />
    </form>
    </>
  );
};

export default SearchForm;