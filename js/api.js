/*aqui é o script que tratá da API que preenche os campos de endereço, bairro, cidade e estado, utilizando o CEP
que foi dado*/
/*criando variaveis para armazenar as informações*/
let data = new Date();

/*pegando uma variavel local e jogando dentro dela a informação do ano em que estamos*/
let ano = data.getFullYear();

/*função responsável por limpar os campos para uma nova consulta de CEP*/
const limparForm = (endereco) => {

    document.getElementById('endereco').value = '';

    document.getElementById('bairro').value = '';

    document.getElementById('cidade').value = '';

    document.getElementById('estado').value = '';

}

/*já nesta função pegamos todos campos informados e colocamos a informação fornecida da API*/
const preencherForm = (endereco) => {

    document.getElementById('endereco').value = endereco.logradouro;

    document.getElementById('cidade').value = endereco.localidade;

    document.getElementById('estado').value = endereco.uf;

    document.getElementById('bairro').value = endereco.bairro;

}



const eNumero = (numero) => /^[0-9]+$/ //espressão regular

const cepValido = (cep) => cep.length == 8 && eNumero(cep);



//sync retornar o valor imediatamente e async há um delay

const pesquisaCep = async () => {

    limparForm();



    const cep = document.getElementById('cep').value;

    const url = `https://viacep.com.br/ws/${cep}/json/`; //jquery



    if (cepValido(cep)) {

        const dados = await fetch(url); // aguarde a requisição retornar

        const endereco = await dados.json(); 



        if (endereco.hasOwnProperty('erro')) {

            document.getElementById('endereco').value = 'CEP não encontrado'

        } else {

            preencherForm(endereco)

        }

    } else {

        document.getElementById('endereco').value = 'CEP incorreto'

    }

   

}

//ao tirar o foco do cep clicando fora do campo, ele trás toda a informação 
document.getElementById('cep').addEventListener('focusout', pesquisaCep);

document.getElementById('data').innerHTML = "Igor - " + ano;