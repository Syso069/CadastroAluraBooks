async function buscaEndereco(cep) {
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCepConvertido = await consultaCep.json();
        if(consultaCepConvertido.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCepConvertido);
        return consultaCepConvertido;
    }catch (erro){
        console.log(erro);
    }
}    
    
buscaEndereco();