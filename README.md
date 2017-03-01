# apollo-learning-dashboard
Learning Dashboard for Apollo


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

