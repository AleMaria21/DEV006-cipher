import cipher from './cipher.js';

window.alert="hoguera"
const confirmBtn = hoguera.querySelector('conocimiento');

const alfabeto=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let botoncifrar=document.getElementById("botoncifrar");
let stringcifrado = document.getElementById("cifrado");
let string=document.getElementById("cifrar"). value;
let inputs= [cifrado, cifrar]

inputs.forEach( input =>{
    input.oninput=()=>{
        input.value=input.value.toUpperCase()
    }
});

botoncifrar.addEventListener("click",   
 function() {
    const llave = document.getElementById("numcifrar").value;
    const offset = parseInt (llave);
    stringcifrado.innerHTML = cipher.encode(offset, string);
   
}); 
    

console.log(cipher);
