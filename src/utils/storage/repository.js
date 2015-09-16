import nosql from 'nosql';
import osenv from 'osenv';
import mkdirp from 'mkdirp';
import path from 'path';

const Repository = {
  name: 'untitled',
  start() {
    const databasePath = path.join(osenv.home(), '.goron', 'data');
    const filePath = path.join(databasePath, this.name);
    mkdirp.sync(databasePath);
    this.nosql = nosql.load(filePath);

    return this;
  }
};

export default Repository;