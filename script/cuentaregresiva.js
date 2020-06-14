const $ = (elemento) => document.querySelector(elemento);
const numero = $(".numero");
const body = $("body");

const cuentaRegresiva = () => {
  if (Number(numero.innerHTML) !== 0) {
    numero.innerHTML -= 1;
  }
};

const cambiaDeColor = () => {
  const fondos = [
    "#4a148c",
    "#6a1b9a",
    "#7b1fa2",
    "#8e24aa",
    "#9c27b0",
    "#ab47bc",
    "#ba68c8",
    "#ce93d8",
    "#e1bee7",
    "#f3e5f5",
  ];
  body.style.backgroundColor = fondos[numero.innerHTML];
};

const contador = setInterval(cuentaRegresiva, 1000);
const colores = setInterval(cambiaDeColor, 1000);
