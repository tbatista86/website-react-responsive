import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyle';
import { Footer, Navbar } from './components'
import Home from './pages/HomePage';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
