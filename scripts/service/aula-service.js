function carregarConteudoAula() {
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });

    carregarAula(data['ia']);
}

function carregarCursoComAulas() {
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });

    carregarCurso(data['ic'])
	listarAulasPorCurso(data['ic']);
}

function carregarAula(idAula) {
    var tituloPagina = document.getElementById("titulo-pagina");
    var conteudoAula = document.getElementById("conteudo-aula");
    var urlRequisicao = urlServer + 'aula/' + idAula;

    if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));
		if (conta.chave != null) {
            urlRequisicao = urlRequisicao + '?chave=' + conta.chave;
        }
    }

    $.ajax({
        url: urlRequisicao,
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'GET',
        dataType: 'json',
        success: function(result, status, request) {
            var aula = JSON.parse(JSON.stringify(result));
            tituloPagina.innerHTML = aula.nome;
            conteudoAula.innerHTML = aula.conteudo;

            listarAulasPorCurso(aula.idCurso);
		},
		error: function(request, status, erro) {
		},
		complete: function (jqXHR, textStatus) {
		}
    });
}

function carregarCurso(idCurso) {
    var tituloPagina = document.getElementById("titulo-pagina");
    var descricaoCurso = document.getElementById("descricao-curso");

    $.ajax({
        url: urlServer + 'curso/' + idCurso,
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'GET',
        dataType: 'json',
        success: function(result, status, request) {
            var curso = JSON.parse(JSON.stringify(result));
            tituloPagina.innerHTML = curso.nome;
            descricaoCurso.innerHTML = curso.descricao;
		},
		error: function(request, status, erro) {
		},
		complete: function (jqXHR, textStatus) {
		}
    });
}

function listarAulasPorCurso(idCurso) {
    var painel = document.getElementById("painel-aulas");
    var aulasHTML = '';
    var urlRequisicao = urlServer + 'aula-por-curso/' + idCurso;
    
    if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));
		if (conta.chave != null) {
            urlRequisicao = urlRequisicao + '?chave=' + conta.chave;
        }
    }

    $.ajax({
        url: urlRequisicao,
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'GET',
        dataType: 'json',
        success: function(result, status, request) {
            var aulas = JSON.parse(JSON.stringify(result));
            for (var i = 0; i < aulas.length; i++) {
                aulasHTML = aulasHTML + 
                '<a href="aula.html?ia=' + aulas[i].id + '" class="list-group-item list-group-item-action">' +
                    '<span class="oi ' + (aulas[i].tipo == 0 ? 'oi-check' : (aulas[i].tipo == 1 ? 'oi-file' : 'oi-video')) + ' "></span>' +
                    aulas[i].nome +
                '</a>';
            }
            painel.innerHTML = aulasHTML;
		},
		error: function(request, status, erro) {
		},
		complete: function (jqXHR, textStatus) {
		}
    });
}