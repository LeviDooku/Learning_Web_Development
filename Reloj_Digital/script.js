alert("Bienvenid@ a mi proyecto con JS!")

var nombre;

document.addEventListener('DOMContentLoaded', function(){
    var formulario = document.getElementById('formulario_nombre');
    var input_nombre = document.getElementById('nombre');
    var div_saludo = document.getElementById('div_saludo');

    formulario.addEventListener('submit', function(event){
        event.preventDefault(); //Evita que se actualice la página al enviar el formulario
        nombre = input_nombre.value;
        div_saludo.textContent = 'Hola, ' + nombre + '! Gracias por visitar mi proyecto :)';     
    });
});

console.log(nombre);