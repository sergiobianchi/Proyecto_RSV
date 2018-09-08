// @ts-nocheck
var expect = chai.expect;

describe('Test de Reservando', function() {
    'use strict';

    describe('Testeando la funcion reservaHorario del objeto restaurant', function() {
        it('Reserva correctamente un horario disponible en un restaurant', function() {
          const restaurantTest = listado.restaurantes[0];

          restaurantTest.reservarHorario('15:30');

          expect(restaurantTest.horarios[0]).to.equal('13:00');
          expect(restaurantTest.horarios[1]).to.equal('18:00');
          expect(restaurantTest.horarios.length).to.equal(2);
        });

        it('Actua correctamente ante un horario inexistente o no disponible en un restaurant', function() {
            const restaurantTest = listado.restaurantes[1];

            restaurantTest.reservarHorario('17:30');

            expect(restaurantTest.horarios[0]).to.equal('12:30');
            expect(restaurantTest.horarios[1]).to.equal('14:30');
            expect(restaurantTest.horarios[2]).to.equal('15:00');
            expect(restaurantTest.horarios.length).to.equal(3);
        });

        it('Actua correctamente si no se informa un horario a reservar en un restaurant', function() {
            const restaurantTest = listado.restaurantes[2];

            restaurantTest.reservarHorario();

            expect(restaurantTest.horarios[0]).to.equal('11:30');
            expect(restaurantTest.horarios[1]).to.equal('12:00');
            expect(restaurantTest.horarios[2]).to.equal('22:30');
            expect(restaurantTest.horarios.length).to.equal(3);
        });
    });

    describe('Testeando la funcion obtenerPuntuacion del objeto restaurant', function() {
      it('Calcula correctamente el promedio de puntuacion cuando el restaurant tiene calificaciones', function() {
          expect(listado.restaurantes[2].obtenerPuntuacion()).to.equal(7);
          expect(listado.restaurantes[9].obtenerPuntuacion()).to.equal(6);
      });

      it('Calcula correctamente el promedio de puntuacion cuando el restaurant no tiene calificaciones', function() {
        listado.restaurantes[2].calificaciones = [];

        expect(listado.restaurantes[2].obtenerPuntuacion()).to.equal(0);
    });

    describe('Testeando la funcion calificar del objeto restaurant', function() {
      it('Valida correctamente que la calificacion sea un numero entero', function() {
          listado.restaurantes[2].calificar();

          expect(listado.restaurantes[2].calificaciones.length).to.equal(0);

          listado.restaurantes[2].calificar('OK');

          expect(listado.restaurantes[2].calificaciones.length).to.equal(0);
      });

      it('Valida correctamente que la calificacion sea un numero entero mayor que cero y menor que 10', function() {
        listado.restaurantes[2].calificar(0);

        expect(listado.restaurantes[2].calificaciones.length).to.equal(0);

        listado.restaurantes[2].calificar(10);

        expect(listado.restaurantes[2].calificaciones.length).to.equal(0);

        listado.restaurantes[2].calificar(5);

        expect(listado.restaurantes[2].calificaciones.length).to.equal(1);
      });
    });

    describe('Testeando la funcion buscarRestaurant del objeto listado', function() {
      it('Encuentra correctamente un restaurant mediante su id', function() {
        expect(listado.buscarRestaurante(7).id).to.equal(7);
      });

      it('Funciona correctamente si el id no existe', function() {
        expect(listado.buscarRestaurante(500)).to.equal('No se ha encontrado ningún restaurant');
      });
    });

    describe('Testeando la funcion obtenerRestaurantes del objeto listado', function() {
      it('Funciona correctamente segun los distintos filtros', function() {
        expect(listado.obtenerRestaurantes(null,null,null).length).to.equal(24);
        expect(listado.obtenerRestaurantes(null,'Nueva York',null).length).to.equal(7);
        expect(listado.obtenerRestaurantes('Hamburguesa',null,null).length).to.equal(4);
        expect(listado.obtenerRestaurantes(null,null,'08:00').length).to.equal(0);
        expect(listado.obtenerRestaurantes('Pasta','Berlín','12:00').length).to.equal(1);
      });
    });
  })
})
