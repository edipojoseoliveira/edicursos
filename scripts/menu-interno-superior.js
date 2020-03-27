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
				'<!-- <li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/historias') + '" href="' + getUrlHref() + 'historias.html">HISTÓRIAS</a>' +
				'</li> -->' +
				'<li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/contato') + '" href="' + getUrlHref() + 'contato.html">CONTATO</a>' +
				'</li>' +
				'<li class="nav-item">' +
					'<a class="nav-link ' + getClassMenu('/sobre') + '" href="' + getUrlHref() + 'sobre.html">SOBRE</a>' +
				'</li>' +
				(verificarUsuarioLogado()
				?
					'<!-- <li class="nav-item">' +
						'<a class="nav-link" href="' + getUrlHref() + 'index.html" onclick="contaSair()">SAIR</a>' +
					'</li> -->'
				:
					'<!-- <li class="nav-item">' +
						'<a data-toggle="modal" data-target="#modalEntrar" class="nav-link" href="#">ENTRAR</a>' +
					'</li>' +
					'<li class="nav-item">' +
						'<a data-toggle="modal" data-target="#modalCadastreSe" class="nav-link" href="#">CADASTRE-SE</a>' +
					'</li> -->'
				)
			'</ul>' +
		'</div>' +
	'</div>' +
'</nav>';

var div = document.getElementById('menu-interno-superior');
div.innerHTML = menu;

function getUrlHref() {
	var endereco = document.URL;
	endereco = endereco.substring(urlSite.length, endereco.length);
	var niveis = endereco.split('/');
	if (niveis.length == 3) {
		return '../../';
	} else if (niveis.length == 2) {
		return '../';
	} else {
		return '';
	}
}

function getImagemLogo() {
	var endereco = document.URL;
	endereco = endereco.substring(urlSite.length, endereco.length);
	var niveis = endereco.split('/');
	if (niveis.length > 0 && endereco != "" && endereco.indexOf('index') == -1) {
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

function contaSair() {
	localStorage.removeItem('conta');
}