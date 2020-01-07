var titulo_pagina_element = document.getElementById('titulo-pagina');
var titulo_pagina_text = titulo_pagina_element.textContent;

//Ao abrir a página se não estiver logado volta para a página inicial
window.onload = function() {
	if (verificarUsuarioLogado() == false 
		&& document.URL != "http://localhost:8080/edicursos/cursos/logica-de-programacao.html") {
		window.location.href = "http://localhost:8080/edicursos/cursos/logica-de-programacao.html";
	}
}

//Muda a classe do menu para ativo quando estiver selecionado
function getClassActive(texto) {
	return titulo_pagina_text == texto ? 'active' : '';
}

//Muda o ícone do item do menu quando a aula já foi feita
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

function getUrlHref(pagina) {
	var endereco = document.URL;
	var inicio = endereco.indexOf('edicursos');
	endereco = endereco.substring(inicio, endereco.length);
	var niveis = endereco.split('/');

	if (verificarUsuarioLogado()) {
		if ((niveis.length - 1) == 2) {
			return 'logica-de-programacao/' + pagina;
		} else {
			return './' + pagina;
		}
	} else {
		return '#';
	}
}

function verificarUsuarioLogado() {
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		if (conta.codigo != null && conta.codigo != '') {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

var menu = 
'<div class="list-group list-group-flush">' + 
	'<a href="' + getUrlHref("introducao-logica-programacao.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Aprenda lógica de programação e comece desenvolver seus aplicativos') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/introducao-logica-programacao', 'oi-file') + '"></span>' +
		'Introdução a lógica de programação' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-acessando-app-inventor.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Acessando o App Inventor') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-acessando-app-inventor', 'oi-video') + '"></span>' +
		'Vídeo - Acessando o App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-criar-projeto-app-inventor.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como criar um projeto no App Inventor') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-como-criar-projeto-app-inventor', 'oi-video') + '"></span>' +
		'Vídeo - Como criar um projeto no App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-concluindo-primeiro-aplicativo-app-inventor.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Concluindo primeiro aplicativo no App Inventor') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-concluindo-primeiro-aplicativo-app-inventor', 'oi-video') + '"></span>' +
		'Vídeo - Concluindo primeiro aplicativo no App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-testando-aplicativo.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Testando o aplicativo') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-testando-aplicativo', 'oi-video') + '"></span>' +
		'Vídeo - Testando o aplicativo' +
	'</a>' +
	'<a href="' + getUrlHref("o-que-sao-variaveis.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Aprenda o que são variáveis') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/o-que-sao-variaveis', 'oi-file') + '"></span>' +
		'O que são variáveis' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-primeiro-aplicativo-variaveis.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com variáveis') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-variaveis', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com variáveis' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-gerando-o-instalador-dos-aplicativos.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Gerando o instalador dos aplicativos') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-gerando-o-instalador-dos-aplicativos', 'oi-video') + '"></span>' +
		'Vídeo - Gerando o instalador dos aplicativos' +
	'</a>' +
	'<a href="' + getUrlHref("operadores-matematicos.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Como usar operadores matemáticos em meu aplicativo?') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/operadores-matematicos', 'oi-file') + '"></span>' +
		'Operadores matemáticos' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-primeiro-aplicativo-operadores-matematicos.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com operadores matemáticos') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-operadores-matematicos', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com operadores matemáticos' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-desenvolvendo-uma-calculadora.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo uma calculadora') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-desenvolvendo-uma-calculadora', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo uma calculadora' +
	'</a>' +
	'<a href="' + getUrlHref("operadores-comparacao.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Aprenda a usar operadores de comparação') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/ativida-operadores-comparacao', 'oi-file') + '"></span>' +
		'Operadores de comparação' +
	'</a>' +
	'<a href="' + getUrlHref("atividade-operadores-comparacao.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Atividade - Operadores de comparação') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/atividade-operadores-comparacao', 'oi-task') + '"></span>' +
		'Atividade - Operadores de comparação' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-primeiro-aplicativo-operadores-comparacao.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com operadores de comparação') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-operadores-comparacao', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com operadores de comparação' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-concluindo-calculadora-de-media.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo uma calculadora de média - Segunda parte') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-concluindo-calculadora-de-media', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo uma calculadora de média - Segunda parte' +
	'</a>' +
	'<a href="' + getUrlHref("estrutura-condicional.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Aprenda o que é e como usar uma Estrutura Condicional') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/estrutura-condicional', 'oi-file') + '"></span>' +
		'Estrutura condicional (IF e ELSE)' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-primeiro-aplicativo-estrutura-condicional.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com estrutura condicional') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-estrutura-condicional', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com estrutura condicional' +
	'</a>' +
	'<a href="' + getUrlHref("operadores-logicos.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Aprendendo sobre os operadores lógicos') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/operadores-logicos', 'oi-file') + '"></span>' +
		'Operadores lógicos' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-primeiro-aplicativo-operadores-logicos.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com operadores lógicos') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-operadores-logicos', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com operadores lógicos' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-primeiro-aplicativo-operadores-logicos-segunda-parte.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Primeiro aplicativo com operadores lógicos - Segunda parte') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-primeiro-aplicativo-operadores-logicos-segunda-parte', 'oi-video') + '"></span>' +
		'Vídeo - Primeiro aplicativo com operadores lógicos - Segunda parte' +
	'</a>' +
	'<a href="' + getUrlHref("estruturas-de-repeticao.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Aprenda a usar as estruturas de repetição em seus aplicativos') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/estruturas-de-repeticao', 'oi-file') + '"></span>' +
		'Estruturas de repetição' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-aplicativo-estrutura-de-repeticao-for.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Aplicativo com estrutura de repetição (FOR)') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-aplicativo-estrutura-de-repeticao-for', 'oi-video') + '"></span>' +
		'Vídeo - Aplicativo com estrutura de repetição (FOR)' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-aplicativo-gera-tabuada.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo um aplicativo que gera tabuada - Segunda parte') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-aplicativo-gera-tabuada', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo um aplicativo que gera tabuada - Segunda parte' +
	'</a>' +
	'<a href="' + getUrlHref("procedimentos.html") + '" class="list-group-item list-group-item-action ' + getClassActive('O que são procedimentos e como usá-los?') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/procedimentos', 'oi-file') + '"></span>' +
		'O que são procedimentos e como usá-los?' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-desenvolvendo-um-conversor-de-moedas-primeira-parte.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo um conversor de moedas - Primeira parte') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-desenvolvendo-um-conversor-de-moedas-primeira-parte', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo um conversor de moedas - Primeira parte' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-desenvolvendo-um-conversor-de-moedas-segunda-parte.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo um conversor de moedas - Segunda parte') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-desenvolvendo-um-conversor-de-moedas-segunda-parte', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo um conversor de moedas - Segunda parte' +
	'</a>' +
	'<a href="' + getUrlHref("banco-de-dados.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Banco de dados no App Inventor') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/banco-de-dados', 'oi-file') + '"></span>' +
		'Banco de dados no App Inventor' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-desenvolvendo-uma-agenda-primeira-parte.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo uma agenda - Primeira parte') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-desenvolvendo-uma-agenda-primeira-parte', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo uma agenda - Primeira parte' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-desenvolvendo-uma-agenda-segunda-parte.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo uma agenda - Segunda parte') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-desenvolvendo-uma-agenda-segunda-parte', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo uma agenda - Segunda parte' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-publicando-aplicativos-na-play-store.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Publicando aplicativos na Play Store') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('logica-de-programacao/video-aula-publicando-aplicativos-na-play-store', 'oi-video') + '"></span>' +
		'Vídeo - Publicando aplicativos na Play Store' +
	'</a>' +
'</div>';

var div = document.getElementById('menu-interno');
div.innerHTML = menu;