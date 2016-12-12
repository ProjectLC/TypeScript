export class Autores {
    private _CodigoAutor: Number;
    private _NombreAutor: String;

    get CodigoAutor () : Number {
        return this._CodigoAutor;
    }

    get NombreAutor () : String {
        return this._NombreAutor;
    }

    set CodigoAutor(codigoAutor: Number){
        this._CodigoAutor = codigoAutor;
    }

    set NombreAutor (nombreAutor : String){
        this._NombreAutor = nombreAutor;
    }

}