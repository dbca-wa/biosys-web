# Biosys Client

The Biosys Client is build on AngularJS. To use the commands below, you need to globally install Angular-CLI:

`npm install -g @angular/cli`

## Development server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build for UAT

Run `ng build --env=uat --prod --build-optimizer` to build the project for UAT. The build artifacts will be stored in the `dist/` directory.

## Build for production

Run `ng build --env=prod --prod --build-optimizer` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
