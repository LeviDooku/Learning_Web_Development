function reloj_digital(){
    const contenedor_reloj = document.getElementById('reloj');
    const fecha_actual = new Date();

    let horas = fecha_actual.getHours();
    let mins = fecha_actual.getMinutes();
    let sec = fecha_actual.getSeconds();



}

setInterval(reloj_digital, 1000);