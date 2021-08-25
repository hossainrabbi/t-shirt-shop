import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from './components/common/AppBar';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyles';

export default function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
