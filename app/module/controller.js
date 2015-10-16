import { Object as Controller } from 'orchestra';
import Collection from './collection';
import CompositeView from './composite-view';

export default Controller.extend({
  initialize() {
    this.collection = new Collection([
      { name: 'Wet Cat', rating: 0 },
      { name: 'Bitey Cat', rating: 1 },
      { name: 'Surprised Cat', rating: 2 }
    ]);

    this._show();
  },

  _show() {
    const view = new CompositeView({
      collection: this.collection
    });

    this.options.region.show(view);
  },

  _hide() {
    const region = this.options.region;
    const view = region.currentView;

    region.empty();

    if (view) {
      delete view.$el;
      delete view.el;
    }
  },

  onDestroy() {
    this._hide();
  }
});
