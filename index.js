//Vc tem q pensar em algumas perguntas para fazer seu programa como:

//Quais são minhas variáveis?
   //São as respostas que serão ums lista;
   
//Quais dados de entrada irei utilizar?
//Quais dados de saíde irei utilizar?


const elementoRespostas = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
   "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  ]

//clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
     alert("Digite sua pergunta!")
     return
  }

  buttonPerguntar.setAttribute("disabled", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
   //gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoRespostas.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoRespostas.style.opacity = 1;
//sumir a resposta após 3s
   setTimeout(function(){//função anônima
      elementoRespostas.style.opacity = 0;
   }, 3000)
   
}

