var titulo_pagina_element = document.getElementById('titulo-pagina');
var titulo_pagina_text = titulo_pagina_element.textContent;

//Ao abrir a página se não estiver logado volta para a página inicial
window.onload = function() {
	if (verificarUsuarioLogado() == false 
		&& document.URL != (urlSite + "cursos/desenvolvimento-de-paginas-web.html")) {
		window.location.href = urlSite + "cursos/desenvolvimento-de-paginas-web.html";
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
	endereco = endereco.substring(urlSite.length, endereco.length);
	var niveis = endereco.split('/');

	if (verificarUsuarioLogado()) {
		if (niveis.length == 2) {
			return 'desenvolvimento-de-paginas-web/' + pagina;
		} else {
			return './' + pagina;
		}
	} else {
		return '#';
	}
}

function verificarUsuarioLogado() {
	return true;
	/*
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
	*/
}

var menu = 
'<div class="list-group list-group-flush">' + 
	'<a href="' + getUrlHref("introducao-ao-curso.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Aprenda a desenvolver sites e aplicações web') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/introducao-ao-curso', 'oi-file') + '"></span>' +
		'Introdução ao curso' +
    '</a>' +
    '<a href="' + getUrlHref("historia-da-internet.html") + '" class="list-group-item list-group-item-action ' + getClassActive('História da Internet') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/historia-da-internet', 'oi-file') + '"></span>' +
		'História da Internet' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-preparando-ambiente-de-desenvolvimento.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Preparando o ambiente de desenvolvimento') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-preparando-ambiente-de-desenvolvimento', 'oi-video') + '"></span>' +
		'Vídeo - Preparando o ambiente de desenvolvimento' +
	'</a>' +
    '<a href="' + getUrlHref("estrutura-basica-de-uma-pagina-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Estrutura básica de uma página HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/estrutura-basica-de-uma-pagina-html', 'oi-file') + '"></span>' +
		'Estrutura básica de uma página HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-conhecendo-estrutura-basica-do-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Conhecendo a estrutura básica do HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-conhecendo-estrutura-basica-do-html', 'oi-video') + '"></span>' +
		'Vídeo - Conhecendo a estrutura básica do HTML' +
	'</a>' +
'</div>';

var div = document.getElementById('menu-interno');
div.innerHTML = menu;