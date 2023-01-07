const InvariantError = require('../../exception/InvariantError');
const albumPayloadSchema = require('./schema');

const AlbumValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = albumPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumValidator;
