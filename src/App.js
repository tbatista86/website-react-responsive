import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyle';
import { Navbar } from './components'
import Home from './pages/HomePage';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
