const ffi = require('ffi');
const ref = require('ref');

const DiscordEventHandlers = require('./DiscordEventHandlers');
const DiscordRichPresence = require('./DiscordRichPresence');

const rpc = ffi.Library('./lib/discord-rpc', {
	'Discord_Initialize':
		[ 'void', [ 'string' /*applicationId*/, ref.refType(DiscordEventHandlers) /*eventHandlers*/, 'bool' /*autoRegister*/, 'string' /*steamId*/ ] ],
	'Discord_Shutdown':
		[ 'void', [] ],
	'Discord_RunCallbacks':
		[ 'void', [] ],
	'Discord_UpdatePresence':
		[ 'void', [ ref.refType(DiscordRichPresence) /*richPresence*/ ] ],
	'Discord_Respond':
		[ 'void', [ 'string' /*userId*/, 'int' /*reply*/ ] ]
});

module.exports = rpc;
