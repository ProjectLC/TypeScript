import { Libros } from "./Libros"

class PrestamosLibros{
    private _codigoPrestamo: number;
    private _nombreLector: string;
    private _libroPrestado: Array<Libros>;
    private _fechaPrestamo: Date;
    private _fechaDevolucion: Date;
    private _renovacionesLibro: number;

    get codigoPrestamo(): number {
        return this._codigoPrestamo;
    }
    set codigoPrestamo(codigoPrestamo: number) {
        this._codigoPrestamo = codigoPrestamo;
    }

    get nombreLector(): string {
        return this._nombreLector;
    }
    set nombreLector(nombreLector: string) {
        this._nombreLector = nombreLector;
    }

    get libroPrestado(): Array<Libros> {
        return this._libroPrestado;
    }
    set libroPrestado(Libros: Array<Libros>) {
        this._libroPrestado = Libros;
    }

    get fechaPrestamo(): Date {
        return this._fechaPrestamo;
    }
    set fechaPrestamo(fechaPrestamo: Date) {
        this._fechaPrestamo = fechaPrestamo;
    }

    get fechaDevolucion(): Date {
        return this._fechaDevolucion;
    }
    set fechaDevolucion(fechaDevolucion: Date) {
        this._fechaDevolucion = fechaDevolucion;
    }

    get renovacionesLibro(): number {
        return this._renovacionesLibro;
    }
    set renovacionesLibro(renovacionesLibro: number) {
        this._renovacionesLibro = renovacionesLibro;
    }
}