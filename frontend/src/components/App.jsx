// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBar from './nav/navbar';

import Tweets from './tweets';
import MainPage from './main/main_page';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';
import Profile from './profile';
import TweetCompose from './tweet_compose';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />

      <ProtectedRoute exact path="/tweets" component={Tweets} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/new_tweet" component={TweetCompose} />
    </Switch>
  </div>
);

export default App;