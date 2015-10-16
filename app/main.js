import Application from './application';

const app = new Application();

app.module('test-module', {
  moduleClass: require('./module/index.js'),
  region: app.layout.moduleRegion
});

app.start();
