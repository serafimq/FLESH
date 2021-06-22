import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Navs from './components/Navs/Navs'
import Register from "./components/Register/Register";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import { showActivUser } from "./redux/actions/userAC";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showActivUser())
  }, [dispatch])


  return (
    <div className="App" >
      <Router>
        <Navs />
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/homepage" render={() => <Homepage />} />
          <Route exact path="/Rick-and-Morty" render={() => <RickAndMorty />} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
