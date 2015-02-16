(function() {
  'use strict';

  var ViewModel = function() {
    this.isLoggedIn = ko.observable(false);
    this.login = function() {
      var self = this;
      this.loginErrorMessage(null);
      OAuthManager.obtainToken({
        scopes: [
          /*
            the permission for reading public playlists is granted
            automatically when obtaining an access token through
            the user login form
            */
            'user-read-private'
          ]
        }).then(function(token) {
          onTokenReceived(token);
        }).catch(function(error) {
          self.loginError(error);
        });
    };

    this.logout = function() {
      localStorage.removeItem(accessTokenKey);
      this.isLoggedIn(false);
    };

    this.loginError = function(errorCode) {
      switch (errorCode) {
        case 'access_denied':
          this.loginErrorMessage('You need to grant access in order to use this website.');
          break;
        default:
          this.loginErrorMessage('There was an error trying to obtain authorization. Please, try it again later.');
        }
    };

    this.loginErrorMessage = ko.observable(null);

    this.user = ko.observable(null);

    this.playlists = ko.observableArray([]);
  };

  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);

  var spotifyApi = new SpotifyWebApi(),
      accessTokenKey = 'sp-access-token';

  function onTokenReceived(token) {
    viewModel.isLoggedIn(true);
    localStorage.setItem(accessTokenKey, token);

    // do something with the token
    spotifyApi.setAccessToken(token);
    spotifyApi.getMe().then(function(data) {
      viewModel.user(data);

      spotifyApi.getUserPlaylists(data.id).then(function(playlists) {
        console.log(playlists);
        viewModel.playlists(playlists.items);
      });
    });
  }

  /**
   * Uses the stored access token
   */
  function initAccessToken() {
    var storedAccessToken = localStorage.getItem(accessTokenKey);
    if (storedAccessToken) {
      onTokenReceived(storedAccessToken);
    }
  }

  initAccessToken();

})();
