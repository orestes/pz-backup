const notifier = require("node-notifier");

module.exports = function(message) {
    const notifier = require('node-notifier');

    const icon = __dirname + '/../../../img/Spiffo250.png';

    notifier.notify({
        title: 'PZ Backup',
        message,
        icon
    });
}