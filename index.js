const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (igual em valor e tipo)",
        "Atribuição",
        "Comparação solta (igual em valor, mas não necessariamente em tipo)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma estrutura de dados que armazena uma coleção de elementos de forma ordenada",
        "Um tipo de loop",
        "Uma função de impressão de texto",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama o método em JavaScript usado para adicionar um elemento ao final de um array?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'var' em JavaScript?",
      respostas: [
        "'let' é bloqueado escopo e 'var' é escopo de função",
        "'let' é escopo de função e 'var' é escopo de bloco",
        "Não há diferença entre 'let' e 'var'",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar um elemento do DOM usando um seletor CSS",
        "Definir o estilo de um elemento",
        "Criar um novo elemento no DOM",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 2 + '7' em JavaScript?",
      respostas: [
        "32",
        "12",
        "57",
      ],
      correta: 0
    },
    {
      pergunta: "O que faz o método 'toUpperCase()' em JavaScript?",
      respostas: [
        "Converte uma string para maiúsculas",
        "Converte uma string para minúsculas",
        "Remove espaços em branco de uma string",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código 'console.log(typeof 42)' em JavaScript?",
      respostas: [
        "'number'",
        "'string'",
        "'boolean'",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model - uma representação da estrutura de um documento HTML",
        "Data Object Model - um modelo de dados utilizado para armazenar informações em JavaScript",
        "Dynamic Object Manipulation - uma técnica para alterar propriedades de objetos em tempo de execução",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
           corretas.add(item)
        }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
  
    quizItem.querySelector('dl').appendChild(dt)
   }
  
  quizItem.querySelector('dl dt').remove()
  
  
   quiz.appendChild(quizItem)
  }