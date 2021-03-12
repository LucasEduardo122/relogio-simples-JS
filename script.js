var body = document.querySelector('body');
var images = document.querySelector('div#image');

//adicionar a hora atual nele
function time() {

    var time = new Date();

    const hour = time.getHours();
    const minutes = time.getMinutes();

    document.querySelector('p.hora').innerHTML = hour + ":" + minutes;

    fundo(hour);

    setTimeout('time()', 500);
}

function fundo(hour) {
    if(hour >= 06 && hour < 13) {
        body.style.backgroundColor = 'yellow';
        var tempo = "dia";
        image(tempo);
        return;
    } else if(hour >= 13 && hour < 19) {
        body.style.backgroundColor = 'orange';
        var tempo = "tarde";
        image(tempo);
        return;
    } else if(hour >= 19 && hour <= 24 || hour >=1 && hour <= 05) {
        body.style.backgroundColor = 'black';
        var tempo = "noite";
        image(tempo);
        return;
    } else if(hour >= 25) {
        alert("Hora inválida");
        
        onload();
    }
}


function image(tempo) {
    images.innerHTML = `<img src="assets/${tempo}.jpg"/>`
}