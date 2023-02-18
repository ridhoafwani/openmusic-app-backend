exports.up = (pgm) => {
  pgm.createTable('user_album_likes', {
    id: {
      primaryKey: true,
      type: 'VARCHAR(50)',
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      references: 'users(id)',
      onDelete: 'CASCADE',
    },
    album_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      references: 'albums(id)',
      onDelete: 'CASCADE',
    },
  });

  pgm.addConstraint('user_album_likes', 'unique_album_id_and_user_id', 'UNIQUE(album_id, user_id)');
};

exports.down = (pgm) => {
  pgm.dropTable('user_album_likes');
};
