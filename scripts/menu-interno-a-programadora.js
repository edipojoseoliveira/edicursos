var titulo_pagina_element = document.getElementById('titulo-pagina');
var titulo_pagina_text = titulo_pagina_element.textContent;

function getClassActive(texto) {
	return titulo_pagina_text == texto ? 'active' : '';
}

function getIconeMenu(menu, iconePadrao) {
	if (localStorage.getItem(menu) == 'OK') {
		return 'oi-check';
	} else {
		return iconePadrao;
	}
}

function gravarVisualizacaoPagina(pagina) {
	localStorage.setItem(pagina, 'OK');
}

function getUrlHref() {
	var endereco = document.URL;
	endereco = endereco.substring(urlSite.length, endereco.length);
	console.log(endereco);
	var niveis = endereco.split('/');
	if (niveis.length == 2) {
		return 'a-programadora/';
	} else {
		return './';
	}
}

var menu = 
'<div class="list-group list-group-flush">' + 
	'<a href="' + getUrlHref() + 'introducao.html" class="list-group-item list-group-item-action ' + getClassActive('Introdução') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/introducao', 'oi-file') + '"></span>' +
		'Introdução' +
	'</a>' +
	'<a href="' + getUrlHref() + 'acessando-app-inventor.html" class="list-group-item list-group-item-action ' + getClassActive('Acessando o App Inventor') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/acessando-app-inventor', 'oi-file') + '"></span>' +
		'Acessando o App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-acessando-app-inventor.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Acessando o App Inventor') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/video-aula-acessando-app-inventor', 'oi-video') + '"></span>' +
		'Vídeo - Acessando o App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref() + 'conhecendo-app-inventor.html" class="list-group-item list-group-item-action ' + getClassActive('Conhecendo o App Inventor') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/conhecendo-app-inventor', 'oi-file') + '"></span>' +
		'Conhecendo o App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref() + 'criando-primeiro-aplicativo.html" class="list-group-item list-group-item-action ' + getClassActive('Criando o primeiro aplicativo') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/criando-primeiro-aplicativo', 'oi-file') + '"></span>' +
		'Criando o primeiro aplicativo' +
	'</a>' +
	'<a href="' + getUrlHref() + 'compilando-aplicativo.html" class="list-group-item list-group-item-action ' + getClassActive('Compilando o aplicativo') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/compilando-aplicativo', 'oi-file') + '"></span>' +
		'Compilando o aplicativo' +
	'</a>' +
	'<a href="' + getUrlHref() + 'usando-aplicativo.html" class="list-group-item list-group-item-action ' + getClassActive('Usando o aplicativo') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/usando-aplicativo', 'oi-file') + '"></span>' +
		'Usando o aplicativo' +
	'</a>' +
	'<a href="' + getUrlHref() + 'usando-variaveis.html" class="list-group-item list-group-item-action ' + getClassActive('Usando variáveis') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/usando-variaveis', 'oi-file') + '"></span>' +
		'Usando variáveis' +
	'</a>' +
	'<a href="' + getUrlHref() + 'prova-de-matematica.html" class="list-group-item list-group-item-action ' + getClassActive('Prova de matemática') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/prova-de-matematica', 'oi-file') + '"></span>' +
		'Prova de matemática' +
	'</a>' +
	'<a href="' + getUrlHref() + 'operadores-matematicos.html" class="list-group-item list-group-item-action ' + getClassActive('Operadores matemáticos') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/operadores-matematicos', 'oi-file') + '"></span>' +
		'Operadores matemáticos' +
	'</a>' +
	'<a href="' + getUrlHref() + 'operadores-de-comparacao.html" class="list-group-item list-group-item-action ' + getClassActive('Operadores de comparação') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/operadores-de-comparacao', 'oi-file') + '"></span>' +
		'Operadores de comparação' +
	'</a>' +
	'<a href="' + getUrlHref() + 'melhorias-no-aplicativo.html" class="list-group-item list-group-item-action ' + getClassActive('Melhorias no aplicativo') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/melhorias-no-aplicativo', 'oi-file') + '"></span>' +
		'Melhorias no aplicativo' +
	'</a>' +
	'<a href="' + getUrlHref() + 'criando-condicoes.html" class="list-group-item list-group-item-action ' + getClassActive('Criando condições') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/criando-condicoes', 'oi-file') + '"></span>' +
		'Criando condições' +
	'</a>' +
	'<a href="' + getUrlHref() + 'entregando-as-melhorias.html" class="list-group-item list-group-item-action ' + getClassActive('Entregando as melhorias') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/entregando-as-melhorias', 'oi-file') + '"></span>' +
		'Entregando as melhorias' +
	'</a>' +
	'<a href="' + getUrlHref() + 'criando-aplicativo-para-calcular-tabuada.html" class="list-group-item list-group-item-action ' + getClassActive('Criando aplicativo para calcular a tabuada') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/criando-aplicativo-para-calcular-tabuada', 'oi-file') + '"></span>' +
		'Criando aplicativo para calcular a tabuada' +
	'</a>' +
	'<a href="' + getUrlHref() + 'estudando-tabuada.html" class="list-group-item list-group-item-action ' + getClassActive('Estudando a tabuada') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/estudando-tabuada', 'oi-file') + '"></span>' +
		'Estudando a tabuada' +
	'</a>' +
	'<a href="' + getUrlHref() + 'pensando-no-proximo-aplicativo.html" class="list-group-item list-group-item-action ' + getClassActive('Pensando no próximo aplicativo') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/pensando-no-proximo-aplicativo', 'oi-file') + '"></span>' +
		'Pensando no próximo aplicativo' +
	'</a>' +
	'<a href="' + getUrlHref() + 'desenvolvendo-joguinho-com-tabuada.html" class="list-group-item list-group-item-action ' + getClassActive('Desenvolvendo um joguinho com a tabuada') + '">' +
		'<span class="oi ' + getIconeMenu('a-programadora/desenvolvendo-joguinho-com-tabuada', 'oi-file') + '"></span>' +
		'Desenvolvendo um joguinho com a tabuada' +
	'</a>' +
'</div>';

var div = document.getElementById('menu-interno');
div.innerHTML = menu;