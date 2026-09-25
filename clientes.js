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

        entrada.question("Qual é o seu telefone?",
            (resposta) => {
                cliente.telefone = resposta;

                entrada.question("Qual o seu email?", (resposta) => {
                    cliente.email = resposta;

                    entrada.question("Qual é o aparelho?", (resposta) => {
                        cliente.aparelho = resposta;

                        entrada.question("Qual é a marca do aparelho?", (resposta) => {
                            cliente.marca = resposta;

                            entrada.question("Qual é o modelo do aparelho?", (resposta) => {
                                cliente.modelo = resposta;

                                entrada.question("Qual é o problema do aparelho?", (resposta) => {
                                    cliente.problema = resposta; 

                                    console.log(cliente);
                                });
                            });
                        });
                    });
                });
            });
         });



