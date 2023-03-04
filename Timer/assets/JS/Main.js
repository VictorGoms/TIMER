function relogio(){

function getTimeSeconds(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone:'UTC'
    })
}


const relogio = document.querySelector('.relogio');

let segundos=0;
let temporizador;

function startTimer(){
    temporizador = setInterval(function () {
        
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('comecar')){
        relogio.classList.remove('pausado');
    clearInterval(temporizador);
    startTimer();
    }

    if (el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(temporizador);
        relogio.innerHTML='00:00:00';
        segundos =0
    }

    if (el.classList.contains('pausar')){
        relogio.classList.add('pausado');
    clearInterval(temporizador);
    }

   
});
}

relogio();



