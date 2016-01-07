if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');
var controller = Botkit.slackbot({
    debug: true,
});
var bot = controller.spawn({
    token: process.env.token
}).startRTM();

var template = require('./src/template');

template.use(controller);

