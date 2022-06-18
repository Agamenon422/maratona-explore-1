# HTML
- HyperText Markup Language

- Hiper texto?
São links que colocamos em nosso textos;

- Marcação
 -Tags
- Linguagem
 -Maniera correta de escrever

 O que é hypertext?
 O q é markup?
 O que é tag?
 O que é linguagem HTML?
   É uma Maneira correta de escrever, ccom marcações, que 
   são as tags, e tudo isso se transforma em um Hipertexto.

#CSS
Uma das grandes sacadas do CSS é a gnt entender as 
diferentes propriedades e os diferentes valor que temos
para cada propriedade.
 
 - Apresentação visual para o cliente;
 - Estilo para o HTML;
 - Cascading Style Sheets;
    - Folha de Estilo em Cascata
    Cascata é a ordem que coloco cara atributo;

#Declaração
- Seletor
  Posso usar o nome da tag para ser o meu seletor, dai 
  dentro das {vc coloca propriedade e valor}
_ Propriedades e valor

#Conceitos
_ Cascata
  Em uma folha de estilos a cascata significa que sempre 
  vou pegar o ultimo código.

- Especificidade
  Significca como é que eu estou colocando esses seletores. A 
  especificidade tem o peso de prioridade maior que o da 
  cascata.

_ Box model

  Caixa, tudo são caixas, todas as tags do html são 
  consideradas caixas e possuen determinadas propriedades
  como: 

  Margin (são os espaços ao redor de uma caixa);

  Border (é a borda de uma caixa);
  
  Padding (é o preenchimento); 
  
  Height (altura);
  
  Content (é o conteúdo dentro da caixa);
  
  Width (largura da caixa);

- Display block vc inline


#JavaScript


1. variáveis 

   - let estaChovendo = true

   O let ele pode mudar a qualquer momento;

   - const meuNome = "Mayk"

   A const é imutável, ela não varia.

As "" aspas duplas ou as simples '' são usdas para textos;



2. Tipos de dados

- String = textos

   '' aspas simples
   "" aspas duplas

- Number

   12 - Integer (+ -) Inteiro
   3.2 - Float (+ -) flutuante

- Boolean

   true ou false 

- undefined 
 
  indefinido, é um dado que não existe;



3. Operadores

- atribuição de valor (ex.: = )   
   let n1 = 12 (Ler let n1 RECEBE 12)
   let n2 = 3   (Ler let n2 RECEBE 3)

- Aritméticos (ex.: * / + - )

   são calculos matemáticos simples;
   console.log (12 * 4) = 48
   console.log (12 / 4) = 3

   concatenação de String (+)

- Operadores de comparação (ex.: >< ==)
   transforma a expressão em true ou false;

   const maiorQue = 1 > 2 // false
   const igualA = 1 == 1 // true



 4. Condicional (if/else)

   const idade = 17
   const maiorDeDezoito = idade >= 18 //ele vai transforma isso em um boolean

   if (maiorDeDezoito) {
     alert("Pode tirar carteira de motorista")
  // nem sempre o fi vem seguido do else, ele pode vim só;   
   } else {
     alert ("Não pode tirar")
   }



5. Estruturas de dados
são um poucco mais complexos;

Array - Vetor - lista

- Array
   Array é simplimente uma lista;

   Array-----------------0------1----2--3-
   cconst temperatura = [23.3, 32.2, 1, 5]

   console.log(temperatura[0])
   //quando vc mandar printar na tela vai sair o valor referente a 
   posição 0, que nesse caso corresponde ao número 23.3, e assim 
   sucessivamente, e se vc colocar um número que n tem na lista ele 
   vai retonar um valor undefined;


- Objeto // usando objeti dentro do Array
const pessoa = {
  nome: "Mayk",
  idade: 38,
  filhos: ["K", "E", "J", "L", "G"]

  console.log(pessoa.filho[3])
  }



6. Function - função
   
   1.2 Criação//existem muitas maneiras de se criar ok;

     function nomeDaFuncao() {
       console.log('código da função')
     }

   1.2 Execução da função

     nomeDaFuncao()//ele vvai executar a função aqui;

   1.3 Parâmetros

   function soma(a, b) {
     console.log(a + b)
   }
   soma(34, 45)
   soma(90, 54)

//uma funçãso poderá ou não dá retorno;

  1.4 retorno

  function soma(a, b) {
    return a + b
  }
//como vai funcionar isso, o retorno serve para tirar valores de dentro da função;
  
  const multiplica = soma(2, 2) * 4
  console.log(multiplica)
  //ele vai somar e dar 16;



7. Extensões da linguagem (ex.: Math, Date ...)

   - Math.random() //ele vai gerar um número randomico sempre entre zero e 1;

   - Math.floor(1.2) //arredonda para baixo qualquer número quebrado, florr significa 'piso';

   - Math.ceil(1.2) //arredonda para cima qualquer número quebrado, ceil significa 'teto';

   -Math.PI //mostra o número do PI, caso vc n lembre, podemos usar para seno, conseno enfim;



8. DOM - Document Object Model // é a modelagem do nosso documento em objeto, transforma tudo que é documento em objeto, inclusive a janela do nosso navegador;

   -window

      windou.alert("alerta")

  - document //escrevemos bastante para manipular os elementos html

      document.write("texto") //write significa escrever;

 - manipular elementos

    document.documentElement.style.backgroud = "white"     
    //o 'documet' procura o 'documentElement' que é o 1º elemento do html e aplica um 'style' do CSS um 'backgroud' direto no documento;   

34:38 min da aula 3