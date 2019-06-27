<p  align="center"><img  width=100%  src="https://i.imgur.com/cJZa7kz.png"></p>
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

##  Basic Overview
Dionisio is a NodeJS backend framework for agile web development designed to be used in conjunction with ngx-prometheus. Dionisio provides powerful and simple tools for extremly fast scaffolding of web applications using the power of Angular

Dionisio is built on top of NestJS

##  Features

  

-  **Realtime Database Bindings** - Watch for changes on your data in realtime

-  **Chunk data flow** - Recieve large amounts of data splitted in small chanks seamlessly utilizing the power of Prometheus Observables

-  **Powerful queries based on TypeORM** - Only request what you need

-  **Agnostic ORM** - Integrate Dionisio with different databases using adapters usign TypeORM

-  **Extension support** - Extend Dionisio to almost everything you can imagine

  

##  Installation

```bash

npm i -g @epsidev/dionisio-cli

```

  

##  Usage

####  Generate a project with Dionisio CLI

```bash

dionisio new dionisio-demo

```

  

####  Start the server

```bash

npm start

```

## Roadmap
- [x] Collection Generator (Code Scaffold)
- [x] Client Libraries (Angular)
- [x] Real-time support
- [x] Extended collection features (decrement, increment)
- [x] Schematics Generator
- [ ] Remote functions
- [x] Generator available through Dionisio CLI
- [x] Deployment tools

## Notes

#### External libraries, tools and plugins

Dionisio loves to embrace custom libraries and plugins built with by the community. Take a look at the page on [Extending Dionisio](https://epsidev.com.mx/dionisio/docs/extending) on EpsiDev site and start building your own custom tools for the framework. If you developed something and want us to hear about it send us an email to contacto@epsidev.com.mx

  

##  Contributing

Please take a look at our [contributing](https://epsidev.com.mx/dionisio/contributing) guidelines if you're interested in helping!

####  Changelog
- Removed support for Dionisio CLI, instead we are using npx with hygen
- Removed support for Auth, dropped because Dionisio blends so well with Firebase Auth
- Added support for Dionisio CLI (again)