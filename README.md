<p>O projeto foi desenvolvido por <a href="https://github.com/Istvanoliva">Istvan Oliva</a> enquanto estudava Desenvolvimento Frontend na <a href="https://www.betrybe.com/">Trybe</a> :rocket:</p>

# O que deverá ser desenvolvido

Neste projeto você vai desenvolver um jogo no estilo Super Trunfo! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

  * Criar um baralho, com o tema livre;

  * Adicionar e remover uma carta do baralho;

  * Visualizar todas as cartas que foram adicionadas ao baralho;

  * Jogar com o baralho criado.
  
![requisito-4](images/requisito-4.png)

---
## Desenvolvimento

Você deve desenvolver uma aplicação em React com manipulação de estados em classes. Essa aplicação simulará um jogo de **Super Trunfo**, desde a criação das cartas do seu baralho até a funcionalidade de jogar.

Na renderização das cartas, sua aplicação deverá possuir três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.

O tema do seu baralho é **livre**, então explore a sua criatividade! Mas use seu bom senso para a criação do seu baralho. Lembre-se das normas de conduta e ética no Manual de Estudante.

## Requisitos do projeto
  - [1. Crie o formulário que será usado para adicionar cartas ao baralho](#1-crie-o-formulário-que-será-usado-para-adicionar-cartas-ao-baralho)
  - [2. Adicione as props necessárias ao componente de formulário](#2-adicione-as-props-necessárias-ao-componente-de-formulário)
  - [3. Crie e renderize o componente Card com as props necessárias](#3-crie-e-renderize-o-componente-card-com-as-props-necessárias)
  - [4. Crie o preview da carta que está sendo criada pelo formulário](#4-crie-o-preview-da-carta-que-está-sendo-criada-pelo-formulário)
  - [5. Faça a validação do botão de Salvar no formulário](#5-faça-a-validação-do-botão-de-salvar-no-formulário)
  - [6. Crie a função do botão salvar](#6-crie-a-função-do-botão-salvar)
  - [7. Crie a validação do Super Trunfo](#7-crie-a-validação-do-super-trunfo)
  - [8. Exiba a lista de cartas que estão salvas no estado](#8-exiba-a-lista-de-cartas-que-estão-salvas-no-estado)
  - [9. Crie um botão para remover uma carta do baralho](#9-crie-um-botão-para-remover-uma-carta-do-baralho)
- [Requisitos bônus](#requisitos-bônus)
  - [10. Crie o filtro pelo nome da carta](#10-crie-o-filtro-pelo-nome-da-carta)
  - [11. Crie o filtro por raridade da carta](#11-crie-o-filtro-por-raridade-da-carta)
  - [12. Crie o filtro de Super Trunfo](#12-crie-o-filtro-de-super-trunfo)
- [Requisitos não avaliativos](#requisitos-não-avaliativos)
  - [Regras do Jogo](#regras-do-jogo)
  - [O que será necessário](#o-que-será-necessário)
  - [13. Iniciar o jogo](#13-iniciar-o-jogo)
  - [14. Criar botão Próxima Carta](#14-criar-botão-próxima-carta)
  - [15. Recomeçar o jogo](#15-recomeçar-o-jogo)

---

## Habilidades
Neste projeto, verificamos se voce é capaz de:

  * Ler o estado de um componente e usá-lo para alterar o que exibimos no browser

  * Inicializar um componente, dando a ele um estado pré-definido

  * Atualizar o estado de um componente

  * Capturar eventos utilizando a sintaxe do React

  * Criar formulários utilizando sintaxe JSX com as tags: `input`, `textarea`, `select`, `form`, `checkbox`

  * Transmitir informações de componentes filhos para componentes pais via callbacks

---
### Protótipo do projeto

Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/psAYBgwjQ1pQqBe3wJvljt/Tryunfo

---

### Informações sobre o Super Trunfo
O Super Trunfo é um jogo de cartas que ficou muito popular no Brasil entre as décadas de 80 e 90, mas que faz bastante sucesso até hoje. Suas regras são bastante simples, por isso ele é considerado um jogo fácil de jogar. Apesar de ter regras simples, cada baralho  de Super Trunfo pode ter um tema diferente, o que o torna um jogo bastante divertido.

Originalmente, o jogo de Super Trunfo é formado por um baralho de 32 cartas. Cada carta representa um item relacionado ao tema do jogo. Em cada carta também existe uma lista com características daquele item e cada característica possui um valor numérico. 

Para começar o jogo, as cartas devem ser embaralhadas e divididas igualmente para cada participante. Em cada rodada cada pessoa pega somente a primeira carta do seu monte. Na primeira rodada uma pessoa escolhe qual característica quer comparar com as cartas das outras pessoas que estão jogando. Ganha quem tiver o maior número nessa característica. A pessoa que ganhou a rodada recebe as cartas das outras pessoas e escolhe qual característica quer comparar na próxima rodada. O jogo termina quando alguma pessoa tiver todas as cartas do baralho.

Em cada baralho existe uma (e somente uma) carta Super Trunfo. Essa carta ganha de todas as outras cartas do baralho, independentemente dos valores das características.

O jogo de Super Trunfo pode ser feito com praticamente qualquer tema, mas tradicionalmente os mais comuns são: carros, países, cidades ou animais.
