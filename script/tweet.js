const $ = (elemento) => document.querySelector(elemento);

const contador = $(".contador");
const tuit = $(".tuit");
const btnTuitear = $(".btn-tuitear");

const contarCaracteres = () => {
  contador.innerHTML = 240 - tuit.value.length;

  if (Number(contador.innerHTML) < 0) {
    btnTuitear.disabled = true;
    tuit.style.color = "red";
    contador.style.color = "red";
    btnTuitear.style.filter = "contrast(0.5)";
  } else {
    btnTuitear.disabled = false;
    tuit.style.color = "black";
    contador.style.color = "black";
    btnTuitear.style.filter = "none";
  }
};

tuit.addEventListener("input", contarCaracteres);

const enviarTuit = () => {
  if (tuit.value.length > 0 && tuit.value.length < 241) {
    alert("Twitt enviado.");
    tuit.value = "";
    contador.innerHTML = 240;
  }
};

btnTuitear.addEventListener("click", enviarTuit);
