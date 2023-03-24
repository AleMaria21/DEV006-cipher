import cipher from './cipher.js';

window.alert="hoguera"
const confirmBtn = hoguera.querySelector('conocimiento');

const alfabeto=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let botoncifrar=document.getElementById("botoncifrar");
let eInput=document.getElementById("cifrado");
let pInput=document.getElementById("cifrar");
let inputs= [cifrado, cifrar]

inputs.forEach(input =>{
    input.oninput=()=>{
        input.value=input.value.toUpperCase()
    }
});

botoncifrar.addEventListener("click", 
    function () {
     let pInput = document.getElementById("cifrar").value;
     let num = document.getElementById("numcifrar").value;
     let eInput = document.getElementById("cifrado");
     eInput.innerHTML = mcifrar(pInput, num);
}); 
    
    function mcifrar(pInput, num) {
         var resultado = "";
         for(var i=0; i<pInput.length; i++){
             var ascii_num=pInput.charCodeAt(i);
             if(ascii_num >= 65 && ascii_num <=90){
                 resultado += String.fromCharCode(((pInput - 65 + parseInt(num)) % 26) +65);
                }
             else{
                 resultado += pInput.charAt(i);
                }
        
            }
            return resultado;
    }

// console.log(cipher);
