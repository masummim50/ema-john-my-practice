import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import Nomatch from './Components/Nomatch';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/shop/:allproducts'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='*'>
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
