
import './App.css';
import Home from './views/Home';
import Login from './views/Login'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom' 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            {localStorage.userid !== undefined ? <Home /> : <Redirect to="/auth"/>}
        </Route>
        <Route path="/auth">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
