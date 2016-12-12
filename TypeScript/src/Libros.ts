import { Autores } from "./Autores"
import { GenerosLibros } from "./GenerosLibros"
import { Editoriales } from "./Editoriales"

export class Libros {
    private _codigoLibro: number;
    private _nombreLibro: string;
    private _autores: Array<Autores>;
    private _genero: GenerosLibros;
    private _editorial: Editoriales;
    private _fechaPublicacion: Date;
    private _numeroTomo: number;
    private _tiempoPrestamo: number;

    get codigoLibro(): number {
        return this._codigoLibro;
    }

    get nombreLibro(): string {
        return this._nombreLibro;
    }

    get autores(): Array<Autores> {
        return this._autores;
    }

    get genero(): GenerosLibros {
        return this._genero;
    }

    get editorial(): Editoriales {
        return this._editorial;
    }

    get fechaPublicacion(): Date {
        return this._fechaPublicacion;
    }

    get numeroTomo(): number {
        return this._numeroTomo;
    }

    get tiempoPrestamo(): number {
        return this._tiempoPrestamo;
    }

    set codigoLibro(codigoLibro: number) {
        this._codigoLibro = codigoLibro;
    }

    set nombreLibro(nombreLibro: string) {
        this._nombreLibro = nombreLibro;
    }

    set autores(autores: Array<Autores>) {
        this._autores = autores;
    }

    set genero(codigoGenero: GenerosLibros) {
        this._genero = codigoGenero;
    }

    set editorial(nombreEditorial: Editoriales) {
        this._editorial = nombreEditorial;
    }

    set fechaPublicacion(fechaPublicacion: Date) {
        this._fechaPublicacion = fechaPublicacion;
    }

    set numeroTomo(numeroTomo: number) {
        this._numeroTomo = numeroTomo;
    }

    set tiempoPrestamo(tiempoPrestamo: number) {
        this._tiempoPrestamo = tiempoPrestamo;
    }
    
}