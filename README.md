# TestPackage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## HOW TO USE PACKAGE

## Install package
npm install dynamic-grid --save

## import class of package in app.module.ts file
import { SampleComponent, SampleService, SampleModule } from 'dynamic-grid';

## import class of package in app.component.ts file
import { SampleComponent,SampleService } from 'dynamic-grid';

add two property in constructor(Component, Service)
pass jsonURL to dynamic-grid package. After that package will be shown dynamic table

## app.component.html
add package root
<sample-component>
</sample-component>  






