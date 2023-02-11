const routes = (handler) => [
  {
    method: 'POST',
    path: '/export/playlists/{playlistId}',
    handler: handler.postExportSongsInPlaylistHandler,
    options: {
      auth: 'openmuciapi_jwt',
    },
  },
];

module.exports = routes;
