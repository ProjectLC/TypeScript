"use strict";
var PrestamosLibros = (function () {
    function PrestamosLibros() {
    }
    Object.defineProperty(PrestamosLibros.prototype, "codigoPrestamo", {
        get: function () {
            return this._codigoPrestamo;
        },
        set: function (codigoPrestamo) {
            this._codigoPrestamo = codigoPrestamo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrestamosLibros.prototype, "nombreLector", {
        get: function () {
            return this._nombreLector;
        },
        set: function (nombreLector) {
            this._nombreLector = nombreLector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrestamosLibros.prototype, "libroPrestado", {
        get: function () {
            return this._libroPrestado;
        },
        set: function (Libros) {
            this._libroPrestado = Libros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrestamosLibros.prototype, "fechaPrestamo", {
        get: function () {
            return this._fechaPrestamo;
        },
        set: function (fechaPrestamo) {
            this._fechaPrestamo = fechaPrestamo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrestamosLibros.prototype, "fechaDevolucion", {
        get: function () {
            return this._fechaDevolucion;
        },
        set: function (fechaDevolucion) {
            this._fechaDevolucion = fechaDevolucion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrestamosLibros.prototype, "renovacionesLibro", {
        get: function () {
            return this._renovacionesLibro;
        },
        set: function (renovacionesLibro) {
            this._renovacionesLibro = renovacionesLibro;
        },
        enumerable: true,
        configurable: true
    });
    return PrestamosLibros;
}());
//# sourceMappingURL=PrestamosLibros.js.map