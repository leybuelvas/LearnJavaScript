
console.log("Asignaciones");
const regresaTrue = ()=>{ console.log("verdadero"); return true;}
const regresaFalse = ()=>{ console.log("Falso"); return false;}


const soyUndefined= undefined;
const soyNull= null;
const soyFalso= false;

const a1= false && "Hola Kevin" && 150;
const a2= "Hola" && "Mundo" && soyFalso && true;
const a3= soyFalso || "ya no soy falso de nuevo"
const a4= soyFalso || soyUndefined || soyNull || "ya no soy falso de nuevo" 
const a5= soyFalso || soyUndefined || regresaTrue() || "ya no soy falso de nuevo" 


console.log({a1, a2, a3, a4});

if (regresaFalse() && regresaTrue() && (true || false || true )){
    console.log("Hacer algo");
    } else {
        console.log("Hacer otra cosa");
    }
