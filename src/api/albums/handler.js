const autoBind = require('auto-bind');

/* eslint-disable no-unused-vars */

class AlbumsHandler {
  constructor(albumsService, storageService, albumValidator, uploadValidator) {
    this._albumsService = albumsService;
    this._storageService = storageService;
    this._albumValidator = albumValidator;
    this._uploadValidator = uploadValidator;
    autoBind(this);
  }

  async postAlbumHandler(request, h) {
    this._albumValidator.validateAlbumPayload(request.payload);
    const { name, year } = request.payload;
    const albumId = await this._albumsService.addAlbum({ name, year });
    const response = h.response({
      status: 'success',
      message: 'Album berhasil ditambahkan',
      data: {
        albumId,
      },
    });
    response.code(201);
    return response;
  }

  async getAlbumByIdHandler(request) {
    const { id } = request.params;
    const album = await this._albumsService.getAlbumById(id);
    return {
      status: 'success',
      data: {
        album,
      },
    };
  }

  async putAlbumByIdHandler(request) {
    this._albumValidator.validateAlbumPayload(request.payload);
    const { name, year } = request.payload;
    const { id } = request.params;
    await this._albumsService.editAlbumById(id, { name, year });
    return {
      status: 'success',
      message: 'Album berhasil diperbarui',
    };
  }

  async deleteAlbumByIdHandler(request) {
    const { id } = request.params;
    await this._albumsService.deleteAlbumById(id);
    return {
      status: 'success',
      message: 'Album berhasil dihapus',
    };
  }

  async postAlbumCoverHandler(request, h) {
    const { id } = request.params;
    const { cover } = request.payload;
    this._uploadValidator.validateImageHeaders(cover.hapi.headers);

    const fileLocation = await this._storageService.writeFile(cover, cover.hapi);

    await this._albumsService.addCoverAlbumUrl(id, fileLocation);
    const response = h.response({
      status: 'success',
      message: 'Cover berhasil diunggah',
      data: {
        fileLocation,
      },
    });

    response.code(201);
    return response;
  }
}

module.exports = AlbumsHandler;
