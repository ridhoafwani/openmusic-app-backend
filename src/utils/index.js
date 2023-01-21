const mapPlaylistDBToModel = ({
  id,
  name,
  owner,
}) => ({
  id,
  name,
  username: owner,
});

module.exports = mapPlaylistDBToModel;
