exports.up = (pgm) => {
  pgm.addColumns('playlists', {
    cover: {
      type: 'TEXT',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumns('playlists', 'cover');
};
