/** 3. 
 * Ingresar el (nombre) de un [alumno]
 * y tres [notas] por [materia] (en total tres materias) 
 * y determinar qué materias aprobó 
 * y cuáles reprobó.  */


// [alumno]
//     (nombres)
//     (id)
// [nota]
//    (promedio)
// [materia]
//     (nombre)
//     (id)


class Alumno {
    materias = [];

    constructor( nombres, objMaterias = [] ) {
        this.nombres = nombres;
        this.materias = [ objMaterias ];
    }

    agregarUnaMateria( materia ) {
        this.materias = [ materia, ...this.materias ];
    }
}

class Materia {
    constructor( nombre, objNotas ) {
        this.nombre = nombre;
        this.notas = objNotas;
    }
}

class Nota {
    notas = [];
    definitiva = 0;
    aprobo = false;
    NOTA_MIMINA = 3.5;

    agregarUna( nota ) {
        this.notas.push( nota );
        this.promedio();
    }

    agregarVarias( listaNotas ) {
        this.notas = [ ...this.notas, ...listaNotas ];
        this.promedio();
    }

    reiniciar() {
        this.notas = [];
    }

    promedio() {
        let suma = 0;
        for (const nota of this.notas ) {
            suma = suma + nota;
        }

        this.definitiva = suma / this.notas.length;
        this.aprueba();
    }

    aprueba() {
        this.aprobo = this.definitiva >= this.NOTA_MIMINA;
    }

}


// const notasLogica = new Nota();
// notasLogica.agregarUna( 4.5 );
// notasLogica.agregarUna( 3.4 );

// const notasMatematicas = new Nota();
// notasMatematicas.agregarVarias( [ 3.4, 2.5, 2.3, 1.4 ] );

// const objMaterias = new Materia(
//     'Logica de Programacion',
//     notasLogica
// );

// const objMatematicas = new Materia(
//     'Matematicas Discretas',
//     notasMatematicas
// );

// const juan = new Alumno( 
//     'Juan Manuel',
//     objMaterias 
// );

// juan.agregarUnaMateria( objMatematicas );

// console.log( juan );






