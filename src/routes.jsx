define(function (require, exports, module) {

  'use strict';

  var {React, Router} = require('module!../../libReact/src/main'),
    {Route, DefaultRoute, Redirect} = Router,
    Main = require('jsx!./pages/Main.jsx'),
    CallHandling = require('jsx!./pages/CallHandling.jsx');

  return <Route handler={Main} path="/" name="index">
    <Route name="callHandling" handler={CallHandling}/>
    <Redirect from="/" to="callHandling"/>
  </Route>;


});
