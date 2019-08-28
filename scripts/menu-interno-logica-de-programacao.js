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
	var inicio = endereco.indexOf('edicursos');
	endereco = endereco.substring(inicio, endereco.length);
	var niveis = endereco.split('/');
	if ((niveis.length - 1) == 2) {
		return 'logica-de-programacao/';
	} else {
		return './';
	}
}

var menu = 
'<div class="list-group list-group-flush">' + 
	'<a href="' + getUrlHref() + 'introducao-logica-programacao.html" class="list-group-item list-group-item-action ' + getClassActive('Aprenda lógica de programação e comece desenvolver seus aplicativos') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/introducao-logica-programacao', 'oi-file') + '"></span>' +
		'Introdução a lógica de programação' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-acessando-app-inventor.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Acessando o App Inventor') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-acessando-app-inventor', 'oi-video') + '"></span>' +
		'Vídeo - Acessando o App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-como-criar-projeto-app-inventor.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como criar um projeto no App Inventor') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-como-criar-projeto-app-inventor', 'oi-video') + '"></span>' +
		'Vídeo - Como criar um projeto no App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-concluindo-primeiro-aplicativo-app-inventor.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Concluindo primeiro aplicativo no App Inventor') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-concluindo-primeiro-aplicativo-app-inventor', 'oi-video') + '"></span>' +
		'Vídeo - Concluindo primeiro aplicativo no App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-testando-aplicativo.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Testando o aplicativo') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-testando-aplicativo', 'oi-video') + '"></span>' +
		'Vídeo - Testando o aplicativo' +
	'</a>' +
	'<a href="' + getUrlHref() + 'o-que-sao-variaveis.html" class="list-group-item list-group-item-action ' + getClassActive('Aprenda o que são variáveis') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/o-que-sao-variaveis', 'oi-file') + '"></span>' +
		'O que são variáveis' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-primeiro-aplicativo-variaveis.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com variáveis') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-variaveis', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com variáveis' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-gerando-o-instalador-dos-aplicativos.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Gerando o instalador dos aplicativos') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-gerando-o-instalador-dos-aplicativos', 'oi-video') + '"></span>' +
		'Vídeo - Gerando o instalador dos aplicativos' +
	'</a>' +
	'<a href="' + getUrlHref() + 'operadores-matematicos.html" class="list-group-item list-group-item-action ' + getClassActive('Como usar operadores matemáticos em meu aplicativo?') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/operadores-matematicos', 'oi-file') + '"></span>' +
		'Operadores matemáticos' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-primeiro-aplicativo-operadores-matematicos.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com operadores matemáticos') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-operadores-matematicos', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com operadores matemáticos' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-desenvolvendo-uma-calculadora.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo uma calculadora') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-desenvolvendo-uma-calculadora', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo uma calculadora' +
	'</a>' +
	'<a href="' + getUrlHref() + 'operadores-comparacao.html" class="list-group-item list-group-item-action ' + getClassActive('Aprenda a usar operadores de comparação') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/ativida-operadores-comparacao', 'oi-file') + '"></span>' +
		'Operadores de comparação' +
	'</a>' +
	'<a href="' + getUrlHref() + 'atividade-operadores-comparacao.html" class="list-group-item list-group-item-action ' + getClassActive('Atividade - Operadores de comparação') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/atividade-operadores-comparacao', 'oi-task') + '"></span>' +
		'Atividade - Operadores de comparação' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-primeiro-aplicativo-operadores-comparacao.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com operadores de comparação') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-operadores-comparacao', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com operadores de comparação' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-concluindo-calculadora-de-media.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo uma calculadora de média - Segunda parte') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-concluindo-calculadora-de-media', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo uma calculadora de média - Segunda parte' +
	'</a>' +
	'<a href="' + getUrlHref() + 'estrutura-condicional.html" class="list-group-item list-group-item-action ' + getClassActive('Aprenda o que é e como usar uma Estrutura Condicional') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/estrutura-condicional', 'oi-file') + '"></span>' +
		'Estrutura condicional (IF e ELSE)' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-primeiro-aplicativo-estrutura-condicional.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com estrutura condicional') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-estrutura-condicional', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com estrutura condicional' +
	'</a>' +
	'<a href="' + getUrlHref() + 'operadores-logicos.html" class="list-group-item list-group-item-action ' + getClassActive('Operadores lógicos') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/operadores-logicos', 'oi-file') + '"></span>' +
		'Operadores lógicos' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-primeiro-aplicativo-operadores-logicos.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com operadores lógicos') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-operadores-logicos', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com operadores lógicos' +
	'</a>' +
	'<a href="' + getUrlHref() + 'estruturas-de-repeticao.html" class="list-group-item list-group-item-action ' + getClassActive('Estruturas de repetição') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/estruturas-de-repeticao', 'oi-file') + '"></span>' +
		'Estruturas de repetição' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-aplicativo-estrutura-de-repeticao-for.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Aplicativo com estrutura de repetição (FOR)') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-aplicativo-estrutura-de-repeticao-for', 'oi-video') + '"></span>' +
		'Vídeo - Aplicativo com estrutura de repetição (FOR)' +
	'</a>' +
	'<a href="' + getUrlHref() + 'procedimentos.html" class="list-group-item list-group-item-action ' + getClassActive('Procedimentos') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/procedimentos', 'oi-file') + '"></span>' +
		'Procedimentos' +
	'</a>' +
	'<a href="' + getUrlHref() + 'video-aula-desenvolvendo-jogo-com-numeros.html" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo um jogo com números') + '">' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-desenvolvendo-jogo-com-numeros', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo um jogo com números' +
	'</a>' +
'</div>';

var div = document.getElementById('menu-interno');
div.innerHTML = menu;