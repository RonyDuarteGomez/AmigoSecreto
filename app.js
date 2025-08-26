// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*****Arreglo de lista de amigos guardados*****/
const listaNombreAmigos = [];

/*****detectamos que esta escribiendo en el input para cambiar estilos en el boton*****/
function activarBoton() {
    
    const txtAmigo = document.getElementById('amigo');
    
    if (txtAmigo.value !== "") {
          estilosBotonAgregar(true);
    } else {
          estilosBotonAgregar(false);
    }

}

/*****Cambiamos estilos en el boton añadir*****/
function estilosBotonAgregar(valor){

     const boton = document.getElementById('btnAgregar');
     if(valor){
          boton.classList.remove('button-add');
          boton.classList.add('button-add-activo');
     }else{
          boton.classList.add('button-add');
          boton.classList.remove('button-add-activo');
     }

}

/*****Detectamos el enter para agregar amigo*****/
function seleccionarAdd(event) {
    if (event.key === 'Enter') {
        const boton = document.getElementById('btnAgregar');        
        agregarAmigo();        
    }
}

/*****agregamos al amigo en el array*****/
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim().toUpperCase();

    if (validarNombre(nombre)) {
        listaNombreAmigos.push(nombre);
        mostrarAmigos();
        estilosBotonAgregar(false);
        limpiarInput(input);
    }
}

/*****Validamos que el campo no este vacio y que el nombre no se repita*****/
function validarNombre(nombre) {
    
     if (nombre=="") {
        alert('Debe ingresar un nombre.');
        return false;
     }
     if (listaNombreAmigos.includes(nombre)) {
        alert('El nombre ya fue agregado.');
        return false;
     }

    return true;
}

/*****mostramos a los amigos ingresados en pantalla*****/
function mostrarAmigos() {
    const elementoHTML = document.querySelector("#listaAmigos");
    let html = "";
    let j = 0;
    let k = true;

    for (let i = 0; i < listaNombreAmigos.length; i++) {
        
        if(i!=0&&k==true){html += ' - ';}
        html += `<li>${listaNombreAmigos[i]}</li>`;        
        if(j==6){html += '<br/>'; j=0; k=false;}else{k=true; j++;}
        
    }

    elementoHTML.innerHTML = html;
}

/*****limpia el input para ingresar un nuevo amigo*****/
function limpiarInput(input) {
    input.value = '';
    input.focus();
}


/*****realiza el sorteo de amigos*****/
function sortearAmigo() {

    if (listaNombreAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    if (document.querySelector("#resultado").innerHTML != "") {
        alert("Ya existe un ganador.");
        return;
    }

    const items = document.querySelectorAll("#listaAmigos li");
    let indiceActual = 0;
    let velocidad = 300; 
    const vueltasBase = listaNombreAmigos.length * 3; 
    const ganador = Math.floor(Math.random() * listaNombreAmigos.length); 
    const pasosTotales = vueltasBase + ganador; 
    let pasos = 0;

    function resaltarNombre(index) {
        items.forEach(item => item.classList.remove("seleccionado"));
        items[index].classList.add("seleccionado");
    }

    function animar() {
        resaltarNombre(indiceActual);
        indiceActual = (indiceActual + 1) % listaNombreAmigos.length;
        pasos++;

        
        if (pasos < pasosTotales / 3 && velocidad > 50) {
            velocidad -= 10;
        }
        
        else if (pasos > (pasosTotales * 2) / 3) {
            velocidad += 20;
        }

        if (pasos < pasosTotales) {
            setTimeout(animar, velocidad);
        } else {
            resaltarNombre(ganador);
            document.querySelector("#resultado").innerHTML = `El Ganador es: ${listaNombreAmigos[ganador]}`;
        }
    }

    animar();
}

/*****limpiar juego*****/
function nuevoSorteo() {

     const input = document.getElementById('amigo');
     listaNombreAmigos.length = 0;
     estilosBotonAgregar(false);
     limpiarInput(input);
     document.querySelector("#resultado").innerHTML = "";
     document.querySelector("#listaAmigos").innerHTML = "";

}

