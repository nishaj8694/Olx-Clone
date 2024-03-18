import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthContext, FirebaseContex } from './store/Context';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';
function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContex)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Signup'>
            <Signup />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Create'>
            <Create />
          </Route>
          <Route path='/View'>
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div >
  );
}

export default App;
