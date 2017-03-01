# apollo-learning-dashboard
## Learning Dashboard for Apollo

### Summary
This is a browser functional demonstration of MVW style dashboard and mobile cohesion. All app components are service driven and ready to be introduced to any Microservice server layer. This is a modified boilerplate community project, introducing ...

#### Functional
* Angular2 MVW Data Driven Forms
* Single Page User Interaction
* Webpack build and "chunk" artifact(s)
* Highly Interactive UI
** Bootstrap 4.0
** Material Design (used in PKA-Forms Component)
** Animate CSS
** Several Node Packages for Charts, Tables, and Calendars Components

#### Technical
* Webpack build configuration
** Complex build lifecycle
** Vendor and Pollyfill loading
** Optimized and chunked client side artifact(s)
** Devlopment\Debug tooling
** Asset loading and caching
** Imbeddd development middleware and web server
* Angular2 component framework
* Typescript for mature typesafe precompilled language
* Utilizing both Bootstrap 4 and Material Design

#### Items I Don't Like
* Not crazy about the base index.html build, could be simplier
* !! PKA-Forms Material Design not naturally loading as part of Webpack cycle
** Raw Loader for sass and assets not working well with node-module build-time sass imports
* Main app components should utilize immutable state tree
* Should try to utlize community "typings" build instead of custom-typings.d.ts



### How to Install

_The following is done using your pc terminal console and NodeJS pre-install is required_

* `git clone https://github.com/apollo-agit/apollo-learning-dashboard.git`
* cd to cloned directory
* `npm install`
* `npm run build`
* `npm run server`
* open web browser and navigate to http://localhost:8080/

### Project scaffolding
* package.json 
	* Contains the metadata of the application, the script commands to build and run the applicaiton, and has the dev and production npm libraries.

* webpack.cofig.js 
	* config file that is bootstrapping the webpack files \config directory.

* tsconfig.json 
	* Is the configuration for the typescript compiling settings.

* .gitignore
	* Configuration file that tells git to ignore certain files when checking in.

* /config
	* The directory that houses all the webpack files that packages all the fonts, images, sass, css, source code and vendor libraries.  And also has the configuration for the local dev server.

* /src
	* index.html
		* main file that will bootstrap all the other componets of the application.

	* main.browser.ts
		* main typescript file that is going to bootstrap all the application typescript modules.

	* polyfills.browser.ts
		* typescript file that bootstraps all our vendor typescript polyfill needs.  Polyfills are javascript libraries that may or may not be included in the root browser.

	* vendor.browser.ts
		* The main file that will bootstrap all the vendor typescript libraries.
* /src/app
	* The app directory houses all our applications views, components and styles.

* /src/assets
	* The asset directory which houses all the static html client render files such as images and fonts

