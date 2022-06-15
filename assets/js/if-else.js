let c = 30;
if (c >= 30) {console.log("c es mayor o igual a 30");} 
else {console.log("c es menor a 30");}
console.log("jeje");

const hoy= new Date();
console.log(hoy);

let day = hoy.getDay(); //0: Domingo, 1 Lunes, 2 Martes.....
console.log({day});

if (day===0){console.log("Domingo");
}else {console.log("No es Domingo, tonto");}

if(day===1) {console.log("Lunes");} else if (day===2){console.log("Martes");}else {console.log("Estamos perdidos");}

//sin usar if else, o switch, unicamente objetos
dia =0; // 0: Domingo, 1: lunes....
let diaLetras= ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// dia de la semana
console.log(diaLetras[dia]);


