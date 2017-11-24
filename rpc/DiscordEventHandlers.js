const ffi = require('ffi');
const ref = require('ref');
const Struct = require('ref-struct')

const DiscordJoinRequest = require('./DiscordJoinRequest')

/*
typedef struct DiscordEventHandlers {
    void (*ready)();
    void (*disconnected)(int errorCode, const char* message);
    void (*errored)(int errorCode, const char* message);
    void (*joinGame)(const char* joinSecret);
    void (*spectateGame)(const char* spectateSecret);
    void (*joinRequest)(const DiscordJoinRequest* request);
} DiscordEventHandlers;
*/
const DiscordEventHandlers = Struct({
	'ready': ffi.Function('void', []),
	'disconnected': ffi.Function('void', [ 'int' /*errorCode*/, 'string' /*message*/ ]),
	'errored': ffi.Function('void', [ 'int' /*errorCode*/, 'string' /*message*/ ]),
	'joinGame': ffi.Function('void', [ 'string' /*secret*/ ]),
	'spectateGame': ffi.Function('void', [ 'string' /*secret*/ ]),
	'joinRequest': ffi.Function('void', [ ref.refType(DiscordJoinRequest) /*request*/ ])
});

module.exports = DiscordEventHandlers;
