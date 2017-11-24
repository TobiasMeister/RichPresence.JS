const Struct = require('ref-struct');

/*
typedef struct DiscordRichPresence {
    const char* state; // max 128 bytes
    const char* details; // max 128 bytes
    int64_t startTimestamp;
    int64_t endTimestamp;
    const char* largeImageKey; // max 32 bytes
    const char* largeImageText; // max 128 bytes
    const char* smallImageKey; // max 32 bytes
    const char* smallImageText; // max 128 bytes
    const char* partyId; // max 128 bytes
    int partySize;
    int partyMax;
    const char* matchSecret; // max 128 bytes
    const char* joinSecret; // max 128 bytes
    const char* spectateSecret; // max 128 bytes
    int8_t instance;
} DiscordRichPresence;
*/
const DiscordRichPresence = Struct({
	'state': 'string',
	'details': 'string',
	'startTimestamp': 'int64',
	'endTimestamp': 'int64',
	'largeImageKey': 'string',
	'largeImageText': 'string',
	'smallImageKey': 'string',
	'smallImageText': 'string',
	'partyId': 'string',
	'partySize': 'int',
	'partyMax': 'int',
	'matchSecret': 'string',
	'joinSecret': 'string',
	'spectateSecret': 'string',
	'instance': 'int8'
});

module.exports = DiscordRichPresence;
