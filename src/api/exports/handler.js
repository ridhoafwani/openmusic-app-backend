const autoBind = require('auto-bind');

class ExportHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postExportSongsInPlaylistHandler(request, h) {
    this._validator.validateExportSongsInPlaylistPayload(request.payload);
    const message = {
      userId: request.auth.credentials.id,
      targetEmail: request.payload.targetEmail,
    };

    await this._service.sendMessage('export:songsInPlaylist', JSON.stringify(message));

    const response = h.response({
      status: 'success',
      message: 'Permintaan Anda sedang kami proses',
    });

    response.code(201);

    return response;
  }
}

module.exports = ExportHandler;
