const regresaTrue = ()=>{ console.log("verdadero"); return true;}
const regresaFalse = ()=>{ console.log("Falso"); return false;}
//esto es para ver si el codigo se ejecuta

console.warn("Not o la negacion");
console.log(true);// true
console.log(!true);

//Dadas las variables de tipo entero con valores 
let a = 5
let b = 3
//indicar si la evaluación de estas expresiones daría como resultado verdadero o falso:


num = 50
let resultado = a > num
if(resultado) {
    console.log(`${a} es mayor que ${num}`); 
    { console.log("verdadero"); return (true);};
} 
else {
    console.log(`${num} es mayor que ${a}`);
    { console.log("verdadero"); return (!true);}
}


console.warn("AND");
console.log(true && true);// true
console.log(true && false);// true

console.log("==========");
console.log(regresaFalse() && regresaTrue());// false
console.log(regresaTrue() && regresaFalse);// false

console.log("==== && ====");
regresaFalse() && regresaTrue();

console.log ( "4 condiciones", true && true && true && false); // daria false

console.warn("OR");
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse); 


console.log("4 condiciones", true || true || true || false); // true



