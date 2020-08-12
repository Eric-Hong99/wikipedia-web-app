import React, { useState } from 'react';


const form = (props) => {
  // const [content, ]

  return (
    <form
      onSubmit={props.submit}
      >
      <input 
        placeholder="Enter topic..."
        type="text"
        />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default form;