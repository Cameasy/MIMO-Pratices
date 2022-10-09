const pessoa = {
    nome: 'Tereza',
    idade: 30,
    endereco: {
        locadouro: 'Rua Arizona',
        numero: 66
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {locadouro, numero, cep}} = pessoa;
console.log(locadouro, numero, cep);

const {conta:{ag, num}} = pessoa;
console.log(ag, num);




