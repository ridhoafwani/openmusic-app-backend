const AlbumsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'albums',
  version: '1.0.0',
  register: async (server, {
    albumsService, storageService, albumValidator, uploadValidator,
  }) => {
    const albumsHandler = new AlbumsHandler(
      albumsService,
      storageService,
      albumValidator,
      uploadValidator,
    );
    server.route(routes(albumsHandler));
  },
};
