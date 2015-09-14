import path from 'path';
import BrowserWindow from 'browser-window';
import changeCase from 'change-case';

class Window {
  static defaults = {
    title: 'Goron',
    width: 640,
    height: 480,
    'min-width': 640,
    'min-height': 480
  };

  constructor() {
    const defaults = this.constructor.defaults;
    const options = this.constructor.options;

    this.properties = {
      ...defaults,
      ...options
    };

    this.window = null;
    this.name = changeCase.paramCase(this.constructor.name);
    this.setView('main.html');
  }

  setView(view) {
    const viewsPath = path.join(__dirname, '..', '..', '..', 'res', 'views');
    this.url = `file:///${viewsPath}/${view}`;

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

export default Window;