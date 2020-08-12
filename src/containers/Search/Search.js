import React, { useEffect } from 'react';
import Form from '../../components/Form/Form';

const Search = (props) => {
  useEffect(() => {
    console.log(props);
    return () => (
      console.log('unmounted')
    )
  });

  return (
    <>
      <p>Search</p>
      <Form />
    </>
  )
};

export default Search;