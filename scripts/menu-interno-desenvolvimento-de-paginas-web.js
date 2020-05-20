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
	'<a href="' + getUrlHref("video-aula-como-usar-tag-meta-viewport.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como usar a tag meta viewport') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-usar-tag-meta-viewport', 'oi-video') + '"></span>' +
		'Vídeo - Como usar a tag meta viewport' +
	'</a>' +
    '<a href="' + getUrlHref("definindo-layout-do-site.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Definindo o layout do site') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/definindo-layout-do-site', 'oi-file') + '"></span>' +
		'Definindo o layout do site' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-definindo-layout-do-site-com-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Definindo o layout do site com HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-definindo-layout-do-site-com-html', 'oi-video') + '"></span>' +
		'Vídeo - Definindo o layout do site com HTML' +
	'</a>' +
    '<a href="' + getUrlHref("como-usar-css-em-paginas-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Como usar CSS em páginas HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/como-usar-css-em-paginas-html', 'oi-file') + '"></span>' +
		'Como usar CSS em páginas HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-aplicando-css-ao-header-da-pagina.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Aplicando CSS ao header da página') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-aplicando-css-ao-header-da-pagina', 'oi-video') + '"></span>' +
		'Vídeo - Aplicando CSS ao header da página' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-criando-listas-com-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Criando listas com HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-criando-listas-com-html', 'oi-video') + '"></span>' +
		'Vídeo - Criando listas com HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-criar-barra-de-navegacao-do-site.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como criar a barra de navegação do site') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-criar-barra-de-navegacao-do-site', 'oi-video') + '"></span>' +
		'Vídeo - Como criar a barra de navegação do site' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-usar-links-no-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como usar links no HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-usar-links-no-html', 'oi-video') + '"></span>' +
		'Vídeo - Como usar links no HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-inserir-imagens-nas-paginas-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como inserir imagens nas páginas HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-inserir-imagens-nas-paginas-html', 'oi-video') + '"></span>' +
		'Vídeo - Como inserir imagens nas páginas HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-fixar-barra-lateral-do-site-com-css.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como fixar a barra lateral do site com CSS') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-fixar-barra-lateral-do-site-com-css', 'oi-video') + '"></span>' +
		'Vídeo - Como fixar a barra lateral do site com CSS' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-concluindo-barra-lateral-do-site.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Concluindo a barra lateral do site') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-concluindo-barra-lateral-do-site', 'oi-video') + '"></span>' +
		'Vídeo - Concluindo a barra lateral do site' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-desenvolvendo-rodape-do-site.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Desenvolvendo o rodapé do site') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-desenvolvendo-rodape-do-site', 'oi-video') + '"></span>' +
		'Vídeo - Desenvolvendo o rodapé do site' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-criar-e-usar-favicon-no-site.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como criar e usar o favicon no site') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-criar-e-usar-favicon-no-site', 'oi-video') + '"></span>' +
		'Vídeo - Como criar e usar o favicon no site' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-separar-css-de-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como separar CSS de HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-separar-css-de-html', 'oi-video') + '"></span>' +
		'Vídeo - Como separar CSS de HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-inserir-videos-no-site.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como inserir vídeos no site') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-inserir-videos-no-site', 'oi-video') + '"></span>' +
		'Vídeo - Como inserir vídeos no site' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-formatacao-de-texto-no-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Formatação de textos no HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-formatacao-de-texto-no-html', 'oi-video') + '"></span>' +
		'Vídeo - Formatação de textos no HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-deixar-o-site-responsivo.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como deixar o site responsivo') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-deixar-o-site-responsivo', 'oi-video') + '"></span>' +
		'Vídeo - Como deixar o site responsivo' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-criar-formularios-no-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como criar um formulário no HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-criar-formularios-no-html', 'oi-video') + '"></span>' +
		'Vídeo - Como criar um formulário no HTML' +
	'</a>' +
	'<a href="' + getUrlHref("video-aula-como-aplicar-css-em-formularios-html.html") + '" class="list-group-item list-group-item-action ' + getClassActive('Vídeo - Como aplicar CSS em formulários HTML') + '"' +
		(verificarUsuarioLogado() ? '' : ' data-toggle="modal" data-target="#modalEntrar" ') + '>' +
		'<span class="oi ' + getIconeMenu('desenvolvimento-de-paginas-web/video-aula-como-aplicar-css-em-formularios-html', 'oi-video') + '"></span>' +
		'Vídeo - Como aplicar CSS em formulários HTML' +
	'</a>' +
'</div>';

var div = document.getElementById('menu-interno');
div.innerHTML = menu;