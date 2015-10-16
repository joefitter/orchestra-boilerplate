import { Module } from 'orchestra';
import Controller from './controller';

export default Module.extend({
  onStart() {
    this._controller = new Controller({
      region: this.options.region
    });
  },

  onBeforeStop() {
    this._controller.destroy();
  }
});
