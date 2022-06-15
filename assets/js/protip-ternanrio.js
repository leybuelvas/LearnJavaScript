//se crea una funcion flecha que determine el numero mayor 
const elMayor= (a,b)=> (a > b) ? a : b 

const tieneMembresia= ( miembro ) => (miembro) ? `2 Dolares` : `10 Dolares`

console.log(elMayor(20,515));
console.log(tieneMembresia(false));



/* Crear una matriz con 3 elementos. Los dos primeros son cadenas y el tercero es un operador ternario. */
const familia= false;
const fami= [
    "Peter",
    "Ana",
    familia ? "Juanito" : "firulais"
]
console.log(fami);


/* Uso del operador ternario para asignar un valor a la variable valor. */
const nota= 40// A+, A, B+
const valor= nota >=95 ? "A+" :
             nota >=90 ? "A" :
             nota >=85 ? "B+" :
             nota >=80 ? "B" : "F"
console.log({nota, valor});

