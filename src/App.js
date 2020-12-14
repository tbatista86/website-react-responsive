import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyle';
import { Footer, Navbar } from './components'
import Home from './pages/HomePage';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
