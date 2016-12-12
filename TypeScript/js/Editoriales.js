"use strict";
var Editoriales = (function () {
    function Editoriales() {
    }
    Object.defineProperty(Editoriales.prototype, "codigoEditorial", {
        get: function () {
            return this._codigoEditorial;
        },
        set: function (codigoEditorial) {
            this._codigoEditorial = codigoEditorial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Editoriales.prototype, "nombreEditorial", {
        get: function () {
            return this._nombreEditorial;
        },
        set: function (nombreEditorial) {
            this._nombreEditorial = nombreEditorial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Editoriales.prototype, "telefonoEditorial", {
        get: function () {
            return this._telefonoEditorial;
        },
        set: function (telefonoEditorial) {
            this._telefonoEditorial = telefonoEditorial;
        },
        enumerable: true,
        configurable: true
    });
    return Editoriales;
}());
exports.Editoriales = Editoriales;
//# sourceMappingURL=Editoriales.js.map