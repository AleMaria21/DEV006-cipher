import cipher from './cipher.js';

window.alert = "hoguera"

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

botoncifrar.addEventListener("click",
  function () {
    const offset = parseInt(document.getElementById("numcifrar").value);
    const string = document.getElementById("cifrar").value;
    const resultado = document.getElementById("cifrado").value;
    resultado = cipher.encode(offset, string);
  }
);

botondescifrar.addEventListener("click",
  function () {
    const offsetdes = parseInt(document.getElementById("numdescifrar").value);
    const stringdes = document.getElementById("descifrar").value;
    const resultadodes = document.getElementById("descifrado").value;
    resultadodes = cipher.decode(offsetdes, stringdes);
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
