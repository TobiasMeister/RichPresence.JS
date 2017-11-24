const Config = require('./config');

const ref = require('ref');

const rpc = require('../rpc/DiscordRPC');
const DiscordEventHandlers = require('../rpc/DiscordEventHandlers');
const DiscordRichPresence = require('../rpc/DiscordRichPresence');

var eventHandler = new DiscordEventHandlers();
eventHandler.ready = () => console.log('Ready');
eventHandler.disconnected = (err, msg) => console.log('Disconnected', err, msg);
eventHandler.errored = (err, msg) => console.log('Errored', err, msg);
rpc.Discord_Initialize(Config.appId, eventHandler.ref(), true, null);

var richPresence = new DiscordRichPresence();
richPresence.state = 'State';
richPresence.details = 'Details';
richPresence.largeImageKey = 'main';
richPresence.largeImageText = 'Description';
richPresence.startTimestamp = Date.now() / 1000;
rpc.Discord_UpdatePresence(richPresence.ref());

(function update() {
	rpc.Discord_RunCallbacks();

	setTimeout(() => update(), 1000);
})();

// Call when shutting down your application
// rpc.Discord_Shutdown();
