let vitorias = parseInt(prompt('Digite aqui a quantidade de vitórias: '));
let derrotas = parseInt(prompt('Digite aqui a quantidade de derrotas: '));

let rankFinal = resultadoJogador(vitorias, derrotas)
alert(`Seu ranke é: ${rankFinal}`)


function resultadoJogador(vitorias, derrotas){
    let resultado = vitorias - derrotas;
    return rank(resultado)
}

function rank(resultado) {
    let rankJogador = '';
    if (resultado <= 10) {
        rankJogador = 'Ferro';
    } else if (resultado >= 11 && resultado <= 20) {
        rankJogador = 'Bronze';
    } else if (resultado >= 21 && resultado <= 50) {
        rankJogador = 'Prata';
    } else if (resultado >= 51 && resultado <= 80) {
        rankJogador = 'Ouro';
    } else if (resultado >= 81 && resultado <= 90) {
        rankJogador = 'Diamante';
    } else if (resultado >= 91 && resultado <= 100) {
        rankJogador = 'Lendário';
    } else if (resultado >= 101) {
        rankJogador = 'Imortal';
    }
    return rankJogador;
}
