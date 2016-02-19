import React, { Component } from 'react';
import Router from 'react-router';
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;

const routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute name="home" handler={require('./components/homePage/HomePage')} />
    <Route name="uploadData" handler={require('./components/uploadDataPage/UDPage')} />
    <Route name="publishNews" handler={require('./components/otherPage/PublishNews')} />
    <Route name="sendNotification" handler={require('./components/otherPage/SendNotification')} />
    <Route name="logout" handler={require('./components/otherPage/LogoutPage')} />
    <Route name="addDataRow" path="addDataRow" handler={require('./components/homePage/manageHomePage')} />
    <Route name="updateRow" path="updateRow/:busno" handler={require('./components/homePage/manageHomePage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from="home/*" to="home" />
    <Redirect from="uploadData/*" to="uploadData" />
    <Redirect from="publishNews/*" to="publishNews" />
    <Redirect from="sendNotification/*" to="sendNotification" />
  </Route>
);
