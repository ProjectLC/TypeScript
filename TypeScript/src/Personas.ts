class Personas{
    private _numeroIdentificacion: string;
    private _nombrePersona: string;
    private _apellido1Persona: string;
    private _apellido2Persona: string;
    private _telefono1Persona: string;
    private _telefono2Persona: string;
    private _direccionPersona: string;
    private _emailPersona: string;
    private _fechaNacimiento: Date;
    private _usuarioPersona: string;
    private _clavePersona: string;

    get numeroIdentificacion(): string {
        return this._numeroIdentificacion;
    }    
    set numeroIdentificacion(numeroIdentificacion: string) {
        this._numeroIdentificacion = numeroIdentificacion;
    }

    get nombrePersona(): string {
        return this._nombrePersona;
    }
    set nombrePersona(nombrePersona: string) {
        this._nombrePersona = nombrePersona;
    }

    get apellido1Persona(): string {
        return this._apellido1Persona;
    }
    set apellido1Persona(apellido1Persona: string) {
        this._apellido1Persona = apellido1Persona;
    }

    get apellido2Persona(): string {
        return this._apellido2Persona;
    }
    set apellido2Persona(apellido2Persona: string) {
        this._apellido2Persona = apellido2Persona;
    }

    get telefono1Persona(): string {
        return this._telefono1Persona;
    }
    set telefono1Persona(telefono1Persona: string) {
        this._telefono1Persona = telefono1Persona;
    }

    get telefono2Persona(): string {
        return this._telefono2Persona;
    }
    set telefono2Persona(telefono2Persona: string) {
        this._telefono2Persona = telefono2Persona;
    }

    get direccionPersona(): string {
        return this._direccionPersona;
    }
    set direccionPersona(direccionPersona: string) {
        this._direccionPersona = direccionPersona;
    }

    get emailPersona(): string {
        return this._emailPersona;
    }
    set emailPersona(emailPersona: string) {
        this._emailPersona = emailPersona;
    }
    
    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }
    set fechaNacimiento(fechaNacimiento: Date) {
        this._fechaNacimiento = fechaNacimiento;
    }

    get usuarioPersona(): string {
        return this._usuarioPersona;
    }
    set usuarioPersona(usuarioPersona: string) {
        this._usuarioPersona = usuarioPersona;
    }

    get clavePersona(): string {
        return this._clavePersona;
    }
    set clavePersona(clavePersona: string) {
        this._clavePersona = clavePersona;
    }

}