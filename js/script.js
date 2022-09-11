const botaoCalcula= document.querySelector('.campo-notas__btn');

function pegaNotas (event){
    event.preventDefault();
    const notas = document.querySelectorAll('.campo-notas__input');
    let somaNotas = 0;
    for(let i  = 0; i < notas.length; i++){
        somaNotas += parseFloat(notas[i].value);
        console.log(somaNotas);
    }
    let media = somaNotas / 4;

    const campoResultado = document.querySelector('.campo-notas__resultado');

    if(media >= 7){
        campoResultado.innerHTML = `Sua média é ${media}!!! Parabéns vc foi aprovado`
    }else{
        campoResultado.innerHTML = `Sua média é ${media}!!! Só faz merda hein`
    }
   
}



botaoCalcula.addEventListener('click', pegaNotas);