define(function(require, exports, module) {

    'use strict';

    var {React, Router} = require('module!../../libReact/src/main'),
        {Route, DefaultRoute, Redirect} = Router,
        Main = require('jsx!./pages/Main.jsx'),
        Forwording = require('jsx!./pages/Forwording.jsx');

    return <Route handler={Main} path="/" name="index">
        <Route name="forwording" handler={Forwording}/>
        <Redirect from="/" to="forwording"/>
    </Route>;


});
