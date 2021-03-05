import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainIndex from "./Components/Index/MainIndex";
import Story from "./Components/Story/Story";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
  useEffect(() => {}, [currentUser]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          {currentUser !== null && (
            <Route path="/ty" exact>
              <MainIndex userInfo={currentUser} />
            </Route>
          )}
          {currentUser !== null && (
            <Route path="/ty/story" exact>
              <Story userInfo={currentUser} />
            </Route>
          )}
          {currentUser === null && (
            <Route path="/login" exact component={Login} />
          )}
          <Route path="" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
