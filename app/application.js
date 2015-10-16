import { Application } from 'orchestra';
import LayoutView from './layout-view';

export default Application.extend({

  initialize() {
    this.layout = new LayoutView();
    this.layout.render();
  }
});
