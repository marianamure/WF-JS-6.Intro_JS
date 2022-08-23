var bool = true;

if(bool) { //si esta condicion se cumple
    console.log("variable verdadera");
 } else {
    console.log("variable falsa");
 }

// a === b; a!==b; a<b; a>b; a<=b; a>=b

var n = 10;
if(n >=15) {
    console.log("Numero mayor o igual a 15");
} else{
    console.log("Numero menor a 15");
}

if(n >= 15) {
    console.log("Numero mayor o igual a 15");
} else if (n<=5) {
    console.log ("Numero menor o igual a 5");
} else {
    console.log("Numero es entre 5 y 15");
}

var estalloviendo = false;
if(!estalloviendo) { //! equivalente a no
    console.log("Vamos a pasear")
}

var num1 = 4;
var num2 = 5;
if(num1 !== num2) { //comparación de números debe ser con 2 iguales. !== esto quiere decir que si son diferentes
    console.log("Los números son distintos");
}

var temperatura = 15;
if(temperatura >= 18) {
    if(!estalloviendo) {
        console.log ("Excelente día para caminar en el parque1");
    }
}

if(temperatura >= 18 && !estalloviendo) { //se unen 2 condiciones con doble && (and)
        console.log ("Excelente día para caminar en el parque2");
} else {
    console.log("Luego salimos")
}

if(temperatura >= 18 || !estalloviendo) {//|| (0r) indica que se puede cumplir una u otra 
    console.log ("Salgo de todas formas")
}

// CICLOS
/*
i = 0
0 < 3
HOLA
i = 1
1 < 3
HOLA
i = 2
2 < 3
HOLA
i = 3
3 < 3 NO
*/

for(var i = 0; i < 3; i++) {
    console.log("HOLA " +i);
}

var x = 0;
while(x < 3) {
    console.log("ADIOS");
    x++;  //el ++ también puede ser +=2, +=3 y sucesivamente
    if(x === 1) {
        x += 2;
    } else {
        x++;
    }
}

