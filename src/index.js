import cipher from './cipher.js';

window.alert = "hoguera"

const cifrado = document.getElementById("cifrado");
const cifrar = document.getElementById("cifrar");
const descifrar = document.getElementById("descifrar");
const descifrado = document.getElementById("descifrado");

const inputs = [cifrado, cifrar]
inputs.forEach(input => { 
  input.oninput = () => {
    input.value = input.value.toUpperCase()
  }
});

const inputsdes = [descifrado, descifrar]
inputsdes.forEach(input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase()
  }
});

const botoncifrar = document.getElementById("botoncifrar");
botoncifrar.addEventListener("click",
  function () {
    const offset = parseInt(document.getElementById("numcifrar").value);
    const string = document.getElementById("cifrar").value;
    document.getElementById("cifrado").textContent = cipher.encode(offset, string);
  }
);

const botondescifrar = document. getElementById("botondescifrar");
botondescifrar.addEventListener("click",
  function () {
    const offsetdes = parseInt(document.getElementById("numdescifrar").value);
    const stringdes = document.getElementById("descifrar").value;
    document.getElementById("descifrado").textContent = cipher.decode(offsetdes, stringdes);
  }
);

document.getElementById("resetci").addEventListener("click",
  function () {
    document.getElementById("cifrado").value = "";
    document.getElementById("numcifrar").value = "";
    document.getElementById("cifrar").value = "";
  }
);

document.getElementById("resetdes").addEventListener("click",
  function () {
    document.getElementById("descifrar").value = "";
    document.getElementById("numdescifrar").value = "";
    document.getElementById("descifrado").value = "";
  }
);

console.log(cipher);
