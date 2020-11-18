import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout'
function App() {
  return(
    <Router basename='/'>
      <Layout/>
      <GlobalStyles/>
    </Router>
    )
}

export default App;
