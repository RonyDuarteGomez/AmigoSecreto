// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombreAmigos = [];

function validaciones(nombre){

     if(nombre==''){
          alert('!Debe ingresar texto!');
          return 0;
     }else{
          if (listaNombreAmigos.includes(nombre)) {
               alert('El nombre de amigo ya fue agregado');
               return 0;
          }
          else{
               return 1;
          }
     }

}

function agregarAmigo(){

    
    let nombreAmigos = document.getElementById('amigo').value.toUpperCase();;

     let valida = validaciones(nombreAmigos);

     if (valida ==1){
         listaNombreAmigos.push(nombreAmigos);
         console.log(nombreAmigos);
         console.log(listaNombreAmigos);

         let elementoHTML = document.querySelector("#listaAmigos");
         elementoHTML.innerHTML = listaNombreAmigos;
    
         limpiar()

    }
 

}

function sortearAmigo(){

     let numeroGenerado =  Math.floor(Math.random()*listaNombreAmigos.length);

     let elementoHTML1 = document.querySelector("#resultado");
    elementoHTML1.innerHTML = listaNombreAmigos[numeroGenerado];
}

function limpiar(){

     document.querySelector('#amigo').value = '';
         document.getElementById('amigo').focus();
}