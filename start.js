const TwitchAPI = require('twitch-api');
const credentials = require('../cred/twitchPlaySNES/twitchcredentials');

let instance = new TwitchAPI({
  clientId:credentials.ClientID,
  clientSecret:credentials.SecretKey,
});

console.log(instance);
