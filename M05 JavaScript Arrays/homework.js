/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length -1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map(num => {return num + 1});
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var agregarElemento = array.push(elemento);
   return array;
   
}

//console.log(agregarItemAlFinalDelArray([1, 2, 3], 5))


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var agregarElemento = array.unshift(elemento);
   return array;
}
//console.log(agregarItemAlComienzoDelArray([1, 2, 3], 5))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var stringer = palabras.join(" ");
   return stringer
}

//console.log (dePalabrasAFrase(["hello", "world!"]))

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
//console.log(arrayContiene([1, 2, 3], 4));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sum = 0;
   for (var i=0; i < arrayOfNums.length; i++) {
      sum = sum + arrayOfNums[i];
   }
   return sum;

}
//console.log(agregarNumeros([1,2,3,4,5]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var prom = 0;
   var sum = 0;
   for (var i=0; i < resultadosTest.length; i++) {
      sum =sum + resultadosTest[i];
   }
   prom = sum / resultadosTest.length;
   return prom;
}
//console.log(promedioResultadosTest([1,2,3,4,5]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  var mayor, menor, x, total; 
  total = arrayOfNums.length;
  x = 0;
  var mayor = 0;
  while (x < total ) {
   x = x + 1;
   if (x === 0) {
      mayor = arrayOfNums[0];
      menor = arrayOfNums[0];
   } else if (arrayOfNums[x] > mayor) {
      mayor = arrayOfNums[x];
   } else if (arrayOfNums[x] < menor) {
      menor = arrayOfNums[x];

   }

   }
   return mayor;
  }
//console.log(numeroMasGrande([5,7,11,21,3,6,8,2,3,1,6]));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var prod = 1;
   if (arguments.length === 0) {return 0;}
   if (arguments.length === 1) {return arguments[0];}
   
for (let i=0; i < arguments.length ; i++) {
   prod = prod * arguments[i];

}
return prod;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var Cant18 = 0;
    array.forEach(element => {if (element > 18 ) { 
      Cant18 = Cant18 + 1}
      
   });
return Cant18;

}
//console.log(cuentoElementos([18,18,18,18,18,19,15,18,19,18]));


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
if (numeroDeDia === 1 || numeroDeDia === 7 ) {
   return "Es fin de semana";
} else if (numeroDeDia > 1 && numeroDeDia < 7 ) {
   return "Es dia laboral";
} else {
    return false;
}

}
//console.log(diaDeLaSemana(10));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var resp = num.toString()
  if (resp[0] === "9") {
   return true;
  } else  {
   return false; }
   
}

//console.log(empiezaConNueve(810));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
igual = true;
   comp = array[0]
array.forEach(Element => { if (Element !== comp) {igual = false}})
return igual;
 //var igual = true;
 //var x ;
 //while (x < array.length) {
  
 // if (array[0] === array[x]) {
  // igual = true;
//} else {
   //return false;
//}
//x = x + 1;
 //}
 //return igual;
}
// console.log(todosIguales([18,18,18,18,18,18]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   meses = [];
   if (!(array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre"))) {
      return "No se encontraron los meses pedidos";
   }
   for (let i=0 ; i < array.length ; i++){
 if (array[i] === "Enero") {
   meses.push("Enero");
 } 
 if (array[i] === "Marzo") {
   meses.push("Marzo");
 } 
 if (array[i] === "Noviembre") {
   meses.push("Noviembre");
 } 
}


 return meses;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   array = []
   for (var i = 0; i < 11; i++ ) {
      array.push(6 * i);
   }
   return array;
}
//console.log(tablaDelSeis());


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   Mayor100 =[];
   array.forEach(x => { if (x > 100) {Mayor100.push(x); }} )
   return Mayor100;
}

// console.log(mayorACien([1,2,3,4,5,6,7,8,9,10,100,101,100,200,150,142]));
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
var num2 = []
   for (let i=0 ; i < 10 ; i++) {
      if (i === num+2*i){
         return "Se interrumpió la ejecución";
      } else {
num2.push(num+2*(i+1));
      }
   }
return num2;
}
//console.log(breakStatement(50));
//console.log(breakStatement(-1));


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   array = [];
   i = 0;
while (i < 10) {
   i++;
   if (i === 5)
      continue;
 num = num + 2;
 array.push(num);
}
return array;

}
//console.log(continueStatement(50));
//console.log(breakStatement(-1));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
