function reloj_digital(){
    const contenedor_reloj = document.getElementById('reloj');
    const fecha_actual = new Date();

    let horas = fecha_actual.getHours();
    let mins = fecha_actual.getMinutes();
    let sec = fecha_actual.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    mins = mins < 10 ? '0' + mins : mins;
    sec = sec < 10 ? '0' + sec : sec;

    contenedor_reloj.textContent = `${horas}:${mins}:${sec}`;
}

setInterval(reloj_digital, 1000);