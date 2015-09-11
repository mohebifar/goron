import config from './../../config';
import BrowserWindow from 'browser-window';

export default
class Window {
  constructor(name) {
    this.properties = {
      width: 640,
      height: 480,
      'min-width': 640,
      'min-height': 480
    };

    this.window = null;
    this.name = name;
    this.setView('main.html');
  }

  setView(view) {
    this.url = 'file:///' + config.path.views + '/' + view;

    if (this.window) {
      this.window.loadUrl(this.url);
    }

    return this;
  }

  set(key, value) {
    this.properties[key] = value;

    return this;
  }

  create() {
    this.window = new BrowserWindow(this.properties);
    this.window.loadUrl(this.url);

    this.window.webContents.on('did-finish-load', () => {
      this.window.webContents.send('app', this.name);
    });
  }
}