# Subscriptions_Generator
A sample demo application using Node.js to demonstrate how to subscribe to all extensions.

Subscriptions_Generator
=======================

Subscription_Generator allows you to create subscription for all the extensions enabling you to listen to Presence events and message-store notifications when a call/messages comes into the extension. For more information, see the 
[Developer Guide](https://developer.ringcentral.com/api-docs/latest/index.html#!#Notifications.html).

## Getting Started

The full installation instructions are included as an HTML file in the demo itself. You can view the [full installation instructions on the live demo](http://grokify.github.io/cti-demo/instructions.html).

Since this runs live on GitHub Pages, you can run this demo without any server-side installation, though it may be worthwhile to install the RingCentral for Desktop softphone as described in the instructions.

You can also run this demo on any webserver by adding the `public` directory to the server's html directory. This may be useful if you wish to edit the pages. There is no need to run a database as the demo stores all necessary data using HTML5 Local Storage (e.g. `window.localStorage`). Instructions are provided below for Node.js http-server as one easy approach for this.

### Dependencies

Aside for the RingCentral for Desktop softphone, all dependencies are either built-in to the demo repo or accessed online via CDNs. There is no need to separately install depdencies such as JavaScript and CSS files.

### Using Node.js http-server

You can run this demo using any server that can host static webpages, including GitHub pages.

Using Node.js and `http-server` ([NPM package](https://www.npmjs.com/package/http-server)) is presented as one easy to use option.

#### Pre-reqs

Install NPM globally:

```
$ curl https://npmjs.org/install.sh | sh
```

Install `http-server` globally so it cna be run from the command line.

```
$ npm install http-server -g
```

Install and run demo.

```bash
$ git clone https://github.com/ringcentral/ringcentral-cti-demo-js
$ http-server ringcentral-cti-demo-js/public
```

Navigate Google Chrome to the location sepcified by `http-server`, e.g.

```
http://localhost:8080
```

## Customization

### Syntax Highlighting

This demo uses [highlight.js](https://highlightjs.org/) for syntax highlighting. The CSS style files are located in the [GitHub repo](https://github.com/isagalaev/highlight.js/tree/master/public/styles). To choose any style, simply copy the desired style CSS file to the project's `css/highlight.css` location.

## Links

Project Repo

* https://github.com/ringcentral/ringcentral-cti-demo-js

RingCentral SDK for JavaScript

* https://github.com/ringcentral/js-sdk

RingCentral API Docs

* https://developers.ringcentral.com/library.html

RingCentral API Explorer

* http://ringcentral.github.io/api-explorer

## Contributions

Any reports of problems, comments or suggestions are most welcome.

Please report these on [GitHub](https://github.com/ringcentral/ringcentral-cti-demo-js).

## License

RingCentral SDK is available under an MIT-style license. See [LICENSE.txt](LICENSE.txt) for details.

RingCentral SDK &copy; 2015 by RingCentral


### NPM & Bower

You can also include twilio-conversations.js with either
[npm](https://www.npmjs.com) or [bower](http://bower.io/). Including
twilio-conversations.js this way allows you to integrate flexibly with build
systems like [Browserify](http://browserify.org) and
[webpack](https://webpack.github.io).

With npm:

```
npm install twilio-conversations --save
```

With bower:

```
bower install twilio-conversations --save
```

Building
--------

Fork and clone the repository. Then, install dependencies with

```
npm install
npm install gulp -g
```

Part of the build process involves running integration tests against Twilio. In
order to run these, you will need a Twilio account and you will need to set
the following environment variables:

* `ACCOUNT_SID`
* `AUTH_TOKEN`
* `SIGNING_KEY_SID`
* `SIGNING_KEY_SECRET`
* `CONFIGURATION_PROFILE_SID`

Alternatively, you can skip the integration tests by setting `SKIP_INTEGRATION`
to "true". Then, run

```
gulp
```

The builds and docs will be placed in the `dist/` directory.

Contributing
------------

Bug fixes welcome! If you're not familiar with the GitHub pull
request/contribution process, [this is a nice tutorial]
(https://gun.io/blog/how-to-github-fork-branch-and-pull-request/).
