const Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersona = precioPersona;
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.precioBase = function() {
    return this.cantidadPersonas * this.precioPersona;
}

Reserva.prototype.precioFinal = function() {
    return this.precioBase() + this.adicionales() - this.descuentos();
}

Reserva.prototype.adicionales = function() {
    return 0;
}

Reserva.prototype.descuentos = function() {
    return this.descuentosGrupo() + this.descuentosCodigo();
}

Reserva.prototype.descuentosGrupo = function() {
    return 0;
}

Reserva.prototype.descuentosGrupo = function() {
    return 0;
}
