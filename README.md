# BolsterJS-generator

Microfrontend application/container generation cli

## Terms

* **Container** - a host app that manages multiple Microfrontend Experiences
* **Experience** - a Microfrontend app that implements a user journey

## Templates

BolsterJS Generator contains the templates for the generation of a microfrontend container and a microfrontend experience, any changes to `bolsterjs` generated applications should be done here.

## Usage

This package exports an interface that takes a log function and arguments from the cli and parses it.

In order to add more functionality see the `index.js` file, and `lib/create/index.js` as an example.

[BolsterJS](https://github.com/mobilelive-inc/bolsterjs) exposes a binary that allows any user to generate a Micro FrontEnd Experience or Micro FrontEnd Container initial skeleton, using this package, see [BolsterJS CLI](https://github.com/mobilelive-inc/bolsterjs/blob/main/readme.md#cli)
