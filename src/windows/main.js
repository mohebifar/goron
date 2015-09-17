import Window from './../utils/electron/window.js';

export default
class Main extends Window {
  static options = {
    title: 'Goron',
    single: true,
    width: 800,
    height: 600,
    'min-width': 800
  }
}