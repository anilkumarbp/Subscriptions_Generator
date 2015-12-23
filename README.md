
Subscriptions_Generator
=======================

Subscription_Generator allows you to create subscription for all the extensions enabling you to listen to Presence events and message-store notifications when a call/messages comes into the extension. For more information, see the 
[Developer Guide](https://developer.ringcentral.com/api-docs/latest/index.html#!#Notifications.html).

## Getting Started

The full installation instructions are included as an HTML file in the demo itself. You can view the [full installation instructions on the live demo](http://grokify.github.io/cti-demo/instructions.html).

Since this runs live on GitHub Pages, you can run this demo without any server-side installation, though it may be worthwhile to install the RingCentral for Desktop softphone as described in the instructions.

You can also run this demo on any webserver by adding the `public` directory to the server's html directory. This may be useful if you wish to edit the pages. There is no need to run a database as the demo stores all necessary data using HTML5 Local Storage (e.g. `window.localStorage`). Instructions are provided below for Node.js http-server as one easy approach for this.

Building
--------

Fork and clone the repository. Then, install dependencies with

```
npm install
node index.js
```

### Dependencies

Aside for the RingCentral for Desktop softphone, all dependencies are either built-in to the demo repo or accessed online via CDNs. There is no need to separately install depdencies such as JavaScript and CSS files.


## Links

Project Repo

* https://github.com/anilkumarbp/Subscriptions_Generator

RingCentral SDK for JavaScript

* https://github.com/ringcentral/js-sdk

RingCentral API Docs

* https://developers.ringcentral.com/library.html

RingCentral API Explorer

* http://ringcentral.github.io/api-explorer

## Contributions

Any reports of problems, comments or suggestions are most welcome.

Please report these on [GitHub](https://github.com/anilkumarbp/Subscriptions_Generator).

## License

RingCentral SDK is available under an MIT-style license. See [LICENSE.txt](LICENSE.txt) for details.

RingCentral SDK &copy; 2015 by RingCentral


Contributing.
------------

Bug fixes welcome! If you're not familiar with the GitHub pull
request/contribution process, [this is a nice tutorial]
(https://gun.io/blog/how-to-github-fork-branch-and-pull-request/).
