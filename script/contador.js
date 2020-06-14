const $ = (elem) => document.querySelector(elem);

const sumar1 = () => {
  const suma = $(".resultado");
  let numeroParcial = Number(suma.innerHTML);
  suma.innerHTML = numeroParcial + 1;
};
const resultadoMasUno = $(".sumo-uno").addEventListener("click", sumar1);

const sumar10 = () => {
  const suma = $(".resultado");
  let numeroParcial = Number(suma.innerHTML);
  suma.innerHTML = numeroParcial + 10;
};
const resultadoMasDiez = $(".sumo-diez").addEventListener("click", sumar10);

const sumar100 = () => {
  const suma = $(".resultado");
  let numeroParcial = Number(suma.innerHTML);
  suma.innerHTML = numeroParcial + 100;
};
const resultadoMasCien = $(".sumo-cien").addEventListener("click", sumar100);

const restar1 = () => {
  const resta = $(".resultado");
  let numeroParcial = Number(resta.innerHTML);
  resta.innerHTML = numeroParcial - 1 > 0 ? numeroParcial - 1 : 0;
};
const resultadoMenosUno = $(".resto-uno").addEventListener("click", restar1);

const restar10 = () => {
  const resta = $(".resultado");
  let numeroParcial = Number(resta.innerHTML);
  resta.innerHTML = numeroParcial - 10 > 0 ? numeroParcial - 10 : 0;
};
const resultadoMenosDiez = $(".resto-diez").addEventListener("click", restar10);

const restar100 = () => {
  const resta = $(".resultado");
  let numeroParcial = Number(resta.innerHTML);
  resta.innerHTML = numeroParcial - 100 > 0 ? numeroParcial - 100 : 0;
};
const resultadoMenosCien = $(".resto-cien").addEventListener(
  "click",
  restar100
);
