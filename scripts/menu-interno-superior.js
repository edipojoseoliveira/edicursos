var menu = 
'<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
	'<div class="container">' +
		getImagemLogo() +
		'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">' +
			'<span class="navbar-toggler-icon"></span>' +
		'</button>' +
		'<div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">' +
			'<ul class="navbar-nav">' +
				'<li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/index') + '" href="' + getUrlHref() + 'index.html">HOME</a>' +
				'</li>' +
				'<li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/cursos') + '" href="' + getUrlHref() + 'cursos.html">CURSOS</a>' +
				'</li>' +
				'<li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/historias') + '" href="' + getUrlHref() + 'historias.html">HISTÓRIAS</a>' +
				'</li>' +
				'<li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/contato') + '" href="' + getUrlHref() + 'contato.html">CONTATO</a>' +
				'</li>' +
				'<li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/cadastre-se') + '" href="' + getUrlHref() + 'cadastre-se.html">CADASTRE-SE</a>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	'</div>' +
'</nav>';

var div = document.getElementById('menu-interno-superior');
div.innerHTML = menu;

function getUrlHref() {
	var endereco = document.URL;
	var inicio = endereco.indexOf('edicursos');
	endereco = endereco.substring(inicio, endereco.length);
	var niveis = endereco.split('/');
	if ((niveis.length - 1) == 3) {
		return '../../';
	} else if ((niveis.length - 1) == 2) {
		return '../';
	} else {
		return '';
	}
}

function getImagemLogo() {
	var endereco = document.URL;
	var inicio = endereco.indexOf('edicursos');
	endereco = endereco.substring(inicio, endereco.length);
	var niveis = endereco.split('/');
	if ((niveis.length - 1) >= 0 && endereco.indexOf('index') == -1) {
		return '<img src="' + getUrlHref() + 'sources/logo-home-slide-um.png" width="160" class="d-inline-block align-top navbar-brand" alt="Logomarca da EdiCursos.">';
	} else {
		return '';
	}
}

function getClassMenu(menu) {
	var endereco = document.URL;
	if (endereco.indexOf(menu) != -1) {
		return 'menu-active';
	} else {
		return '';
	}
}