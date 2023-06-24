var consultaCep = fetch("https://viacep.com.br/ws/01001000/json")
    .then(resposta => resposta.json())
    .then(r => {
        if(r.error) {
            throw Error ('Esse cep não existe!');
        } else {
            console.log(r);
        }
    })
    .catch(error => console.log(error))
    .finally(mensagem => console.log('Processamento concluído!'));
    
console.log(consultaCep);