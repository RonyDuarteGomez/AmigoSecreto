// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombreAmigos = [];

function agregarAmigo(){

    
    let NombreAmigos = document.getElementById('amigo').value;

    if (listaNombreAmigos.includes(NombreAmigos)) {
         alert('El nombre de amigo ya fue agregado');
    } else {
         listaNombreAmigos.push(NombreAmigos);
         console.log(NombreAmigos);
         console.log(listaNombreAmigos);
    }



    

}