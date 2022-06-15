const { captureRejectionSymbol } = require("events");

let a = 10
let b= a
a =30;
console.log({ a, b});

let juan ={ nombre: "juan"}
let ana = {...juan};
ana.nombre = "ana";
console.log({ juan, ana });


let cambiaNombre= (persona)=> {
    persona.nombre = "ley";
    return persona;

}


let peter = { nombre: "peter"};
let ley= cambiaNombre= {peter};
console.log({peter, ley});

let kevin = { nombre: "kevin"};
let leyci= kevin;
console.log({kevin, leyci});
leyci.nombre= "leyci"

let nombre= (persona)=>{persona.nombre="leyci";return persona}

const frutas = ["Pera", "Uva", "Mora"];
console.log("spread");
const otrasFrutas = ["Mango"];
console.log("spread")
console.table({frutas, otrasFrutas});





