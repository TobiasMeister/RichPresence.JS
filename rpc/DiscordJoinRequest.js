const Struct = require('ref-struct');

/*
typedef struct DiscordJoinRequest {
    const char* userId;
    const char* username;
    const char* avatar;
} DiscordJoinRequest;
*/
const DiscordJoinRequest = Struct({
	'userId': 'string',
	'username': 'string',
	'avatar': 'string'
});

module.exports = DiscordJoinRequest;
