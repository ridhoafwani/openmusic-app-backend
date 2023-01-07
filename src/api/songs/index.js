const routes = require('./routes');
const SongHandler = require('./handler');

module.exports = {
  name: 'songs',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const songsHandler = new SongHandler(service, validator);
    server.route(routes(songsHandler));
  },
};
