import React, { Component } from 'react';
// import ReactRouter from 'react-router';
import { Router } from 'react-router';
import { Route } from 'react-router';
// import { Link } from 'react-router';
import { DefaultRoute } from 'react-router';
import { NotFoundRoute } from 'react-router';
import { Redirect } from 'react-router';

const routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute name="exam" handler={require('./components/mainPages/examPage')} />
    <Route name="quiz" handler={require('./components/mainPages/quizPage')} />
    <Route name="attendance" handler={require('./components/mainPages/attendancePage')} />
    <Route name="sendMail" handler={require('./components/mainPages/sendMailPage')} />
    <Route name="logout" handler={require('./components/otherPage/LogoutPage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from="home/*" to="home" />
    <Redirect from="quiz/*" to="quiz" />
    <Redirect from="attendance/*" to="attendance" />
    <Redirect from="sendMail/*" to="sendMail" />
  </Route>
);
