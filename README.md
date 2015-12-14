Explorer--ITA
=============

Simple webapp allowing users to explore the ITA webservices API.

## Development Environment

This project uses [ember-cli](http://ember-cli.com). The [cloning an existing project](http://www.ember-cli.com/#cloning-an-existing-project) section will help you get set up. The following steps are essentially a condensed version of what's written there:

1. Clone this repo.
2. Install `node`.
3. `cd explorer && npm install && bower install`
4. `ember server`

Explorer submits search requests to [ITA webservices](https://github.com/InternationalTradeAdministration/webservices). You'll want to have this running locally on port 3000.

## Deployment

Run `sh deploy.sh`. You must have push access to this repository in order to do deployments.
