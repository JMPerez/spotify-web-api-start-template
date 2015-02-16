/*exported OAuthConfig*/
var OAuthConfig = (function() {
  'use strict';

  /* replace these values with yours obtained in the
  "My Applications" section of the Spotify developer site */
  var clientId = '59d50f7e590b45e09b28574d86b56d06';
  var redirectUri = 'http://localhost:8000/callback.html';

  if (location.href.indexOf('http://jmperezperez.com') === 0) {
    redirectUri = 'http://jmperezperez.com/spotify-web-api-start-template/callback.html';
  }

  var host = /http[s]?:\/\/[^/]+/.exec(redirectUri)[0];

  return {
    clientId: clientId,
    redirectUri: redirectUri,
    host: host,
    stateKey: 'spotify_auth_state'
  };
})();
