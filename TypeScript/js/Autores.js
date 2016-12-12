"use strict";
var Autores = (function () {
    function Autores() {
    }
    Object.defineProperty(Autores.prototype, "CodigoAutor", {
        get: function () {
            return this._CodigoAutor;
        },
        set: function (codigoAutor) {
            this._CodigoAutor = codigoAutor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autores.prototype, "NombreAutor", {
        get: function () {
            return this._NombreAutor;
        },
        set: function (nombreAutor) {
            this._NombreAutor = nombreAutor;
        },
        enumerable: true,
        configurable: true
    });
    return Autores;
}());
exports.Autores = Autores;
//# sourceMappingURL=Autores.js.map