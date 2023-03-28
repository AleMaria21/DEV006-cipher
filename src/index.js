import cipher from './cipher.js';

window.alert="hoguera"
const confirmBtn = hoguera.querySelector('conocimiento');

let inputs = [cifrado, cifrar]
inputs.forEach(input =>{
    input.oninput=()=>{
        input.value=input.value.toUpperCase()
    }
});

let inputsdes = [descifrado, descifrar]
inputsdes.forEach(input =>{
    input.oninput=()=>{
        input.value=input.value.toUpperCase()
    }
});

botoncifrar.addEventListener("click",   
 function() {
    const offset = parseInt(document.getElementById("numcifrar").value);
    const string = document.getElementById("cifrar").value;
    resultado= cipher.encode(offset, string);
    let resultado = document.getElementById("cifrado").value;
    }
); 

botondescifrar.addEventListener("click",   
 function() {
     const offsetdes = parseInt(document.getElementById("numdescifrar").value);
     const stringdes = document.getElementById("descifrar").value;
     resultadodes = cipher.decode(offsetdes, stringdes);
     let resultadodes = document.getElementById("descifrado").value;
    }
); 


console.log(cipher);
