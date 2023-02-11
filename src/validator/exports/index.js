const InvariantError = require('../../exception/InvariantError');
const ExportSongsInPlaylistPayloadSchema = require('./schema');

const ExportsValidator = {
  validateExportSongsInPlaylistPayload: (payload) => {
    const validationResult = ExportSongsInPlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ExportsValidator;
