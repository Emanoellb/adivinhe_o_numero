var numero_gerado = 0;
var tentativas = 0;

function atualizar() {
    numero_gerado = parseInt(Math.random() * 100);
    console.log(numero_gerado)
}

function verificarNumero() {

    var number = document.getElementById('number').value;

    if (number > 100 || number < 0) {
        alert('Aposta inválida!');
        return;
    }

    if (number > numero_gerado) {
        tentativas++;
        alert('O número para ser encontrado é menor!')
    }
    else if (number < numero_gerado) {
        tentativas++;
        alert('O número para ser encontrado é maior!')
    }
    else {
        alert('Parabéns! Você acertou!!! Com ' + tentativas + ' erros');
    }

}

atualizar(); 