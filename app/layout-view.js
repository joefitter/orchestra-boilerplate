import { LayoutView } from 'orchestra';
import template from './template.hbs';

export default LayoutView.extend({
  el: '#app',

  template,

  onRender() {
    console.log(this.$el);
  },

  regions: {
    moduleRegion: '#module'
  }
});
