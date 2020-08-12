import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import WikiApp from './containers/WikiApp/WikiApp';
import './App.css';


const App = (props) => {
  return (
    <BrowserRouter>
      <WikiApp />
    </BrowserRouter>
  );
}

export default App;