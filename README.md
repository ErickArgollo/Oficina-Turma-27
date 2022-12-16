# Oficina-Turma-27

## Tela de Login 
1- Crie um input do tipo "text" no qual será possível coletar o nome do usuário. <br>
2- Crie um input do tipo "button", que inicialmente, deve está desabilitado. <br>
3- Ao digitar no mínimo 3 caracteres no input de texto, o botão de Login deve ser habilitado. <br>
4- Ao clicar no botão de login, o usuário deverá ser redirecionado para a página "/home". <br>
5- O nome do usuário deve ser salvo no localStorage, no seguinte formato: user { name: 'nome aqui' }. <br>

## Tela Home 
1- Na tela home, devemos ter um Header contendo o título "Anime Quotes", um paragráfo contendo o nome do usuário, um link que redireciona para a página de citações favoritas "/favorites" e um link que redireciona para a página Home. <br>
1- Crie um input do tipo "text", que será utilizado para buscar o nome de algum anime. <br> 
2- Crie um input do tipo "button", que ao ser clicado, deve exibir na tela as informações vindas do endpoint "https://animechan.vercel.app/api/quotes/anime?title=${title}" <br>
3- Dentro de cada card de citações, deve haver um botão para favoritar/desfavoritar o card e um botão que redicireciona o usúario para a página "/quotes/:character" <br>
4-O botão de favoritar/desfavoritar deve salvar as informações do card no localStorage, nesse formato: <br>
favoriteQuotes: [ <br>
{ anime, character, quote }, <br>
... <br>
] <br>

## Tela Citações de um personagem
1- Na de citações de um personagem, devemos ter um Header contendo o título "Anime Quotes", um paragráfo contendo o nome do usuário, um link que redireciona para a página de citações favoritas "/favorites" e um link que redireciona para a página Home. <br>
2- Deverá ser exibido na tela um título h1 contendo o nome do personagem. <br>
3- Deverá ser renderizado na tela 10 citações desse personagem, as citações devem vim do endpoint "https://animechan.vercel.app/api/quotes/character?name=${name}"

## Tela de Citações Favoritas 
1- Na tela de Citações Favoritas, devemos ter um Header contendo o título "Anime Quotes", um paragráfo contendo o nome do usuário, um link que redireciona para a página de citações favoritas "/favorites" e um link que redireciona para a página Home. <br>
2- Renderize na tela os cards de citações que vem atráves da chave favoriteQuotes no localStorage.

