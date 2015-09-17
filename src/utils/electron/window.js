import path from 'path';
import BrowserWindow from 'browser-window';
import changeCase from 'change-case';

const windows = {};

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
    if (this.properties.single && windows[this.name] && windows[this.name].length > 0) {
      windows[this.name][0].window.focus();
      return;
    }

    if (!windows[this.name]) {
      windows[this.name] = [];
    }

    windows[this.name].push(this);

    this.window = new BrowserWindow(this.properties);
    this.window.loadUrl(this.url);

    this.window.webContents.on('did-finish-load', () => {
      this.window.webContents.send('window-ready', this.name);
    });

    this.window.on('close', () => {
      windows[this.name].splice(windows[this.name].indexOf(this), 1);
    });
  }
}

export default Window;