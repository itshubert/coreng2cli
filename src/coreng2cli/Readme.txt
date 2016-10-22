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