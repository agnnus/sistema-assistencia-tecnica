const readline = require("readline");
const entrada = readline.createInterface(
    { input: process.stdin, output: process.stdout });


const cliente = {
    nome: "",
    telefone: "",
    email: "",
    aparelho: "",
    marca: "",
    modelo: "",
    problema: "",
};


entrada.question("Qual é o seu nome?",
    (resposta) => {
        cliente.nome = resposta;
        console.log(cliente);
    });

