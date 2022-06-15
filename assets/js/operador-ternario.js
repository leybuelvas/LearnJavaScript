//Ejemplo: Tienda
// Dias de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9
// Entra a un sitio web, para continuar si esta abierto hoy....

const dia = 2; // 0: Domingo, 1: Lunes....
const horaActual = 8;

let horaApertura;
let mensaje; // Està abierto, Està cerrado, hoy abrimos a las xx
horaApertura = ([0,6].includes(dia)) ? 8: 2
mensaje= (horaActual<=horaApertura) ? `esta abierto` : `esta cerrado, Hoy abrimos a las ${horaApertura}`;

function diaSemana(diaSemana) {
  if (diaSemana === 0 || diaSemana === 6) {
    console.log("Fin de semana");
    horaApertura = 9;
  } else {
    console.log("Dias de semana");
    horaApertura = 11;
  }
}

diaSemana(dia);

const isOpen = (horaActual, horaApertura) => {
  if (horaActual >= horaApertura) {
    mensaje = "Està abierto";
  } else {
    mensaje = `Hoy abrimos a las ${horaApertura}`;
  }
};

isOpen(9, 8);

console.log({mensaje});

console.log({ horaApertura });
