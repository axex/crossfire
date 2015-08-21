define(function(require, exports, module) {

    'use strict';

    var {React, Router} = require('module!../../libReact/src/main'),
        {Route, DefaultRoute, Redirect} = Router,
        Main = require('jsx!./pages/Main.jsx'),
        Def = require('jsx!./pages/Def.jsx');

    return <Route handler={Main} path="/" name="index">
        <Route name="def" handler={Def}/>
    </Route>;


});
