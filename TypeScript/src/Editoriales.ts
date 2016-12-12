export class Editoriales {
    private _codigoEditorial: number;
    private _nombreEditorial: string;
    private _telefonoEditorial: string;

    get codigoEditorial(): number {
        return this._codigoEditorial;
    }

    get nombreEditorial(): string {
        return this._nombreEditorial;
    }

    get telefonoEditorial(): string {
        return this._telefonoEditorial;
    }

    set codigoEditorial(codigoEditorial: number) {
        this._codigoEditorial = codigoEditorial;
    }

    set nombreEditorial(nombreEditorial: string) {
        this._nombreEditorial = nombreEditorial;
    }

    set telefonoEditorial(telefonoEditorial: string) {
        this._telefonoEditorial = telefonoEditorial;
    }

}