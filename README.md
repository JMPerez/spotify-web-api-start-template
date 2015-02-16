Spotify Web API Start Template
===========

This is a template for a project using the Spotify Web API.

## Features

The template includes:

- **Bootstrap**. It uses Twitter Bootstrap to provide default styling.
- **Implementation for [Spotify Web API OAuth 2.0 Implicit Grant](https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow) flow**. This is the simplest authentication flow, and works for webapps that want a user to log in and don't need to remember the authentication for a long time. Examples are webapps that want to access user's Your Music (saved tracks) or manipulate user's playlists. The login form is opened in a popup.
- **Wrapper for Spotify Web API in JavaScript**. Though not strictly necessary, it makes it easier to use the Web API. You can have a look at the [documentation](http://jmperezperez.com/spotify-web-api-js/) to have an overview of the available functions, which cover all the Web API endpoints.
- **Knockout.js** as the binding library. This is the _de facto_ library used in lots of Spotify spotlets, and it removes the necessity of manipulating DOM, even in projects such as this basic template.

## Usage

All the dependencies are included in the project, as well as basic credentials for using authentication with the Spotify Web API.

Just start a server listening on port 8000. If you have python installed, you can run:

    python -m SimpleHTTPServer 8000

If you want to deploy the project on a site different from `http://localhost:8000` you will need to register your own Application on the [My Applications section of the Developer Site](https://developer.spotify.com/my-applications/). Register the desired redirect uri and edit the file `js/oauth-config.js` replacing the `clientId` and `redirectUri`.
