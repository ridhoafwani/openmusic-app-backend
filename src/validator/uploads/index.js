const InvariantError = require('../../exception/InvariantError');
const imageHeaderSchema = require('./schema');

const UploadValidator = {

  validateImageHeaders: (headers) => {
    const validationResult = imageHeaderSchema.validate(headers);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UploadValidator;
