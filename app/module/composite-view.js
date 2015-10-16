import { CompositeView } from 'orchestra';
import template from './cats.hbs';
import ItemView from './item-view';

export default CompositeView.extend({
  template,

  childView: ItemView,

  tagName: 'table',

  childViewContainer: 'tbody'
});
