ASP.NET Core - Angular 2 using Angular CLI

- Disable typescript compilation within VS2015
	- Add the following to the first PropertyGroup
		<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>

- In project.json, tell .NET not to compile anything under these folders.

	  "buildOptions": {
			"emitEntryPoint": true,
			"preserveCompilationContext": true,
			"compile": {
			  "exclude": [
				"wwwroot",
				"node_modules"
			  ]
			}
	  },

- Remove everything default .NET bower
- Delete .bowerrc or change location to default "bower_components"
- Run "bower init"
- Install bower libraries i.e. "bower install jquery --save"
- Initialise Angular 2 in project folder
		- ng init
- Change Angular CLI's output to "wwwroot"
		"outDir": "wwwroot",

- To install Bootstrap 4
	- npm install bootstrap@next --save

	Add scripts to angular-cli.json

		"scripts": [
		  "../node_modules/jquery/dist/jquery.js",
		  "../node_modules/tether/dist/js/tether.js",
		  "../node_modules/bootstrap/dist/js/bootstrap.js"
		],

	Finally add the Bootstrap CSS to the apps[0].styles array:

		"styles": [
		  "../node_modules/bootstrap/dist/css/bootstrap.css",
		  "styles.css"
		],

To use jQuery in Typescript, follow the link below.
	http://ayoubgdah.com/blog/using-jquery-with-angular-2-angular-cli/
		- npm install --save jquery
		- update scripts in angular-cli.json
			"scripts": [
			  "../node_modules/jquery/dist/jquery.js"
			]
		- In typescript file

			import { Component, OnInit } from '@angular/core';  
			// import line is this one
			declare var $:any;

			export default class Random implements OnInit {  
			  ngOnInit() {
				// $ will be availble
				console.log($);
			  }
			}