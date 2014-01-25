require.config({
    urlArgs: "bust=" + (new Date()).getTime(), // for development
    paths:{
        backbone: "libs/backbone/backbone",
        jquery: "libs/jquery/jquery-2.1.0",
        marionette: "libs/backbone/backbone.marionette",
        underscore: "libs/lodash/lodash",
        text: "libs/require/text",
        firebase: "https://cdn.firebase.com/v0/firebase",
        backfire: "https://cdn.firebase.com/libs/backfire/0.3.0/backbone-firebase.min"
    },
    shim: {
        backbone: {
            deps:["jquery", "underscore"],
            exports:"Backbone"
        },
        marionette: {
            deps:["backbone"],
            exports:"Marionette"
        },
        backfire: ["firebase"]
    }
});

require(["app"], function(HT){
    HT.start();
});