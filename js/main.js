import * as Popper from "/node_modules/@popperjs/core/dist/umd/popper.js"
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.js'

// commentarios
/*
 delta para un exponential backoff
*/

// aca se pone las cadenas de texto con comillas doble
var _ariable1 = ""
var cadenaTexto = "T"; // tipo String
cadenaTexto = 1;
//camelcase
var cajaHerramientasManuales = ""

//snakecase
var CajaHerramientasManuales = "";

var caja_herramientas_manuales = ""

var _caja_herramientas_manuales = ""

var nombreUsuario = 'Juan carlos baglieto'; // tipo String
var num = 6; // tipo Number
var nn = cadenaTexto + num;
var isOn = true;

var inputHndlAlgomasCbk = 1;

inputHndlAlgomasCbk = "";
/**
 * gfwegdsfsd
 */

//JSON  JavaScript Object Notation
var persona = {"nombre":"Mario",
              "apellido":"Vittorini",
              "calle":"",
              "edad":37,
              "ciudad":"Buenos Aires",
              "correr": function(a) {
                console.log(a);
              }};

var persona2 = {"nombre":"Mario",
              "apellido":"Pergolini",
              "calle":"",
              "edad":37,
              "ciudad":"Buenos Aires"};

var persona3 = {"nombre":"Mario",
              "apellido":"Pergolini",
              "calle":"",
              "edad":37,
              "comportamientos":{"correr": function c() {
                console.log("estoy corriendo");
              },
                                  "caminar": function ca() {}},
              "ciudad":"Buenos Aires"};

var listaPersonas = [
  persona3,
  persona2,
  persona,
  {"nombre":"Pedro", "apellido":"Martinez", "edad":28, "comportamientos":null},
  {"nombre":"Mariana", "apellido":"Perez", "edad":30},
  {"nombre":"Juliana", "apellido":"Alvarez", "edad":30},
  {"nombre":"Fede", "apellido":"Perez", "edad":30},
  {"nombre":"Juan", "apellido":"Perez", "edad":30}
                    ]
              
persona.correr("corro");

var p = listaPersonas[0];
console.log(p);
var comp = p.comportamientos;
comp.correr();

function pr(s) {
  console.log();
}

function imprimirP(p) {
  var st = "Persona de nombre " + p.nombre + " nacido en:" + p.ciudad + " de " + p.edad + " de edad";
  pr(st)
  imprimirNombreUsuario(p.nombre)
}

function imprimirNombreUsuario(nombre) {
  console.log("Persona de nombre " + p.nombre);
}

function imprimirPersonayFecha(p, fecha) {
  console.log("Persona de nombre " + p.nombre + " nacido en:" + p.ciudad + " de " + p.edad + " de edad con fecha" + fecha);
}


imprimirP(persona);
imprimirP(persona2);

listaPersonas.length;
imprimirP(listaPersonas[2])

imprimirNombreUsuario(persona.nombre);


var persona1Nombre = "Federico";
var persona1Apellido = "Vittorini";
var persona2Nombre = "Federico";
var persona2Apellido = "Vittorini";
var persona2Edad = 37;
var persona2Ciudad = "Buenos Aires";
var persona1Edad = 37;
var persona1Ciudad = "Buenos Aires";
var persona1Nombre = "Federico";
var persona1Apellido = "Vittorini";
var persona1Edad = 37;
var persona1Ciudad = "Buenos Aires";


function imprimirPersona(nombre, apellido, edad, ciudad) {
  console.log("Persona de nombre " + nombre + " nacido en:" + ciudad + " de " + edad + " de edad");
}


var persona1Edad = 37;
imprimirPersona(persona1Nombre, persona1Apellido, persona1Edad, persona1Ciudad);



var r = 3;
var t = 5;
console.log(r)
console.log(r++)
console.log(r)

console.log(t)
console.log(++t)

var u = true;
var negacion = !u

// var vacio = ! eval(u):Boolean -> false

//var vacio = ! (u si tenes contenido) 

//var vacio = ! (si u es igual a null, undefined, false, empty o 0, entonces "false", sino devolver true) 

console.log(u);
console.log(negacion);





var list = [{"nombre":"Marcelo", edad:30},
            {"nombre":"Marcelo", edad:38},
            {"nombre":"Marcelo", edad:42},
            {"nombre":"Mario", edad:28},
            {"nombre":"Mario", edad:37},
            {"nombre":"Pedro", edad:39},
            {"nombre":"Carlos", edad:35}]


var aceptados = [];
var rechazados = [];

for (var i=0; i<list.length; i++) {
  var per = list[i];
  console.log(per);
  if (per.nombre != "") {
    if (per.nombre == "Marcelo" || per.nombre == "Mario" ) {

      console.log("Candidato: " + per.nombre);
      if (per.edad >= 35 && per.edad <= 40) {
        console.log("Aceptado: " + per.nombre);
        aceptados.push(per);
      } else if (per.edad <=25 ) {
        console.log("Muy chico: " + per.nombre);
        rechazados.push(per.nombre);
      }

    } else if (per.nombre == "Carlos") {
      console.log("Carlos");
      rechazados.push(per.nombre);
    } else {
      console.log("Rechazado " + per.nombre);
      rechazados.push(per.nombre);
    }
  }
}

console.log(aceptados);

console.log(1 === 1n);


// funcion 3 valores, op, v1, v2


var opcion = 2;

switch(opcion) {
  case 1:
    console.log("Soy el caso 1");
    break;
  case 2:
    console.log("Soy el caso 2");
    break;
  case 3:
    console.log("Soy el caso 3");
    break;
    default:
      console.log("No estoy dentro del switch");  
}
