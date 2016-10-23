# Coreng2cli

## ASP.NET Core - Angular 2 using Angular CLI
A project to learn how to integrate Angular CLI built Angular 2 project into ASP.NET Core MVC and Web API. 

#### Ensure you have the latest (2.x.x) version of Typescript VS Extension

#### Disable typescript compilation within VS2015 (we only want its intellisense), we let Angular CLI handle that
	- Add the following to the first PropertyGroup
		<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>

#### In project.json, stop .NET from compiling anything under these folders.

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

#### You can skip the next four steps if you don't plan to install 3rd party libraries using Bower
- Remove everything default .NET bower.  We don't want it installing under wwwroot/libs
- Delete .bowerrc or change location to default "bower_components"
- Run "bower init"
- Install bower libraries i.e. "bower install jquery --save"

#### Initialize Angular project inside web project folder.  Add sass option if desired.
````bash
ng init --style=sass
````

#### Change Angular CLI"s output to "wwwroot"
		"outDir": "wwwroot",

#### To install Bootstrap 4
````bash
npm install bootstrap@next --save
````

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

#### To use jQuery in Typescript, follow the link below.
See http://ayoubgdah.com/blog/using-jquery-with-angular-2-angular-cli/ for more details.
````bash
npm install --save jquery
````
		- update scripts in angular-cli.json
			"scripts": [
			  "../node_modules/jquery/dist/jquery.js"
			]
		- In typescript file

			import { Component, OnInit } from "@angular/core";  
			// import line is this one
			declare var $:any;

			export default class Random implements OnInit {  
			  ngOnInit() {
				// $ will be availble
				console.log($);
			  }
			}

#### MVC Routing to Angular
More information can be found here http://blog.nbellocam.me/2016/03/21/routing-angular-2-asp-net-core/
- Install Nuget package Microsoft.AspNetCore.SpaServices
- Add spa-fallback route to Startup.cs
````bash
		routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
````

#### Run Angular CLI build task with watch option
````bash
ng build --watch --dev
````

Include Angular CLI's output files in _Layout.cshtml
```bash
<script type="text/javascript" src="/inline.js"></script>
<script type="text/javascript" src="/styles.bundle.js"></script>
<script type="text/javascript" src="/scripts.bundle.js"></script>
<script type="text/javascript" src="/main.bundle.js"></script>
```