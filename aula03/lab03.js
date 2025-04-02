class Pessoa{
    constructor( nome, email, idade, sexo, cidade, interesses, observacoes){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.sexo = sexo;
        this.cidade = cidade;
        this.interesses = interesses;
        this.observacoes = observacoes;
    }
    toString(){
        return `Nome: ${this.nome}, Email: ${this.email}, Idade: ${this.idade}, Sexo: ${this.sexo}, Cidade: ${this.cidade}, Interesses: ${this.interesses}, Observações: ${this.observacoes}`;
    }
}

let p1 = new Pessoa("João", "joao@gmail", 20, "M", "São Paulo", ["Música", "Esportes"], "Gosta de jogar futebol");
let p2 = new Pessoa("Maria", "maria@gmail", 25, "F", "Rio de Janeiro", ["Música", "Esportes"], "Gosta de jogar vôlei"); 
// forma literal
let p3 = {nome: "José", email: "jose@gmail", idade: 30, sexo: "M", cidade: "Curitiba", interesses: ["Música", "Esportes"], observacoes: "Gosta de jogar basquete"};
console.log(p1.toString());
console.log(p2.toString());