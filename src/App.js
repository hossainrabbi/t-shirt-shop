import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyles';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
