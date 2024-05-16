//-------------------------------------------------HOMEM--------------------------------------

const calcular = document.getElementById('calcular');
function imc(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(peso != '' && altura != ''){
        const valorIMC = (peso/(altura*altura)).toFixed(2);
        let verifica = '';

        if(valorIMC < 18.5){
            verifica = 'Você está abaixo do peso';
        }else if(valorIMC < 25){
            verifica = 'Você está no peso ideal';
        }else if (valorIMC < 30){
            verifica = 'Você está levemente acima do peso.';
        }else if (valorIMC < 35){
            verifica = 'Você está com obesidade grau I.';
        }else if (valorIMC < 40){
            verifica = 'Você com obesidade grau II';
        }else {
            verifica = 'Você com obesidade grau III. Cuidado!!';
        }

        resultado.textContent =' seu IMC é: ' + valorIMC + '. ' + verifica;
    }else {
        alert('termina de preencher preguiçoso');
    }
}
calcular.addEventListener('click', imc);

//--------------------------------------------MULHER-----------------------------------------

const calcular2 = document.getElementById('calcular2');
function imc2(){
    const peso2 = document.getElementById('peso2').value;
    const altura2 = document.getElementById('altura2').value;
    const resultado2 = document.getElementById('resultado2');

    if(peso2 != '' && altura2 != ''){
        const valorIMC = (peso2/(altura2*altura2)).toFixed(2);
        let verifica = '';

        if(valorIMC < 18.5){
            verifica = 'Você está abaixo do peso';
        }else if(valorIMC < 25){
            verifica = 'Você está no peso ideal';
        }else if (valorIMC < 30){
            verifica = 'Você está levemente acima do peso.';
        }else if (valorIMC < 35){
            verifica = 'Você está com obesidade grau I.';
        }else if (valorIMC < 40){
            verifica = 'Você com obesidade grau II';
        }else {
            verifica = 'Você com obesidade grau III. Cuidado!!';
        }

        resultado2.textContent =' seu IMC é: ' + valorIMC + '. ' + verifica;
    }else {
        alert('termina de preencher preguiçoso');
    }
}
calcular2.addEventListener('click', imc2);