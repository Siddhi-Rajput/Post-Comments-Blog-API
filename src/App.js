import React, { useEffect , useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css'
import User from './User';
import UserPage from './UserPage';
import ViewPosts from './ViewPosts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {

  return(
    <>
      <Switch>
        <Route exact path='/user' component={User}/>
        <Route exact path='/user/:userId/' component={UserPage}/>
        <Route exact path='/user/:userId/posts/' component={ViewPosts}/>
        <Redirect to='/user'/>
      </Switch>
    </>
  );
}

export default App;
