"use strict";
var Libros = (function () {
    function Libros() {
    }
    Object.defineProperty(Libros.prototype, "codigoLibro", {
        get: function () {
            return this._codigoLibro;
        },
        set: function (codigoLibro) {
            this._codigoLibro = codigoLibro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libros.prototype, "nombreLibro", {
        get: function () {
            return this._nombreLibro;
        },
        set: function (nombreLibro) {
            this._nombreLibro = nombreLibro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libros.prototype, "autores", {
        get: function () {
            return this._autores;
        },
        set: function (autores) {
            this._autores = autores;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libros.prototype, "genero", {
        get: function () {
            return this._genero;
        },
        set: function (codigoGenero) {
            this._genero = codigoGenero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libros.prototype, "editorial", {
        get: function () {
            return this._editorial;
        },
        set: function (nombreEditorial) {
            this._editorial = nombreEditorial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libros.prototype, "fechaPublicacion", {
        get: function () {
            return this._fechaPublicacion;
        },
        set: function (fechaPublicacion) {
            this._fechaPublicacion = fechaPublicacion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libros.prototype, "numeroTomo", {
        get: function () {
            return this._numeroTomo;
        },
        set: function (numeroTomo) {
            this._numeroTomo = numeroTomo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libros.prototype, "tiempoPrestamo", {
        get: function () {
            return this._tiempoPrestamo;
        },
        set: function (tiempoPrestamo) {
            this._tiempoPrestamo = tiempoPrestamo;
        },
        enumerable: true,
        configurable: true
    });
    return Libros;
}());
exports.Libros = Libros;
//# sourceMappingURL=Libros.js.map