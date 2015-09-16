import repository from './../utils/storage/repository.js';

const connections = {
  ...repository,
  name: 'connections',
  createConnection(doc) {
    connections.nosql.insert(doc);
  },
  all(cb) {
    return connections.nosql.all((doc) => doc, cb);
  }
};

export default connections.start();