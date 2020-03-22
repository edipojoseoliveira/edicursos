var alunoCursoCarregado = new Object();
var botaoCertificado = document.getElementById("btnGerarGertificado");
var botaoInscreverSe = document.getElementById("btnInscreverSe");

window.onload = function() {
	verificarBotoesParaExibir();
}

function verificarBotoesParaExibir() {
	botaoCertificado.setAttribute("hidden", "true");
		
	if (verificarUsuarioLogado()) {
		verificarInscricaoNoCurso();
	}
}

function limparMensagensAlunoCurso() {
	var mensagensAlunoCurso = document.getElementById("mensagensAlunoCurso");
	mensagensAlunoCurso.innerHTML = '';
}

function exibirMensagemAlunoCurso(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-danger" role="alert">' +
		mensagem +
	'</div>';

	var mensagensAlunoCurso = document.getElementById("mensagensAlunoCurso");
	mensagensAlunoCurso.innerHTML = mensagemHTML;
}

function salvarAlunoCurso(idCurso) {
	limparMensagensAlunoCurso();
	
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		var curso = new Object();
		var aluno = new Object();
		var alunoCurso = new Object();

		curso.id = idCurso;
		aluno.id = conta.codigo;

		alunoCurso.curso = curso;
		alunoCurso.aluno = aluno;
		alunoCurso.situacao = 1;
		
		$.ajax({
			url: urlServer + 'aluno-curso/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(alunoCurso),
			success: function(result, status, request) {
				window.location.href = urlSite + "cursos/logica-de-programacao/introducao-logica-programacao.html";
			},
			error: function(request, status, erro) {
				exibirMensagemAlunoCurso('Erro ao tentar conectar ao servidor. ' + JSON.stringify(erro));
			},
			complete: function (jqXHR, textStatus) {
			}
		});
	} else {
		$('#modalEntrar').modal('show');
	}
}

function verificarInscricaoNoCurso() {
	var conta = JSON.parse(localStorage.getItem('conta'));
	var idAluno = conta.codigo;
	var idCurso = 1;
	
	$.ajax({
		url: urlServer + 'aluno-curso/consultar?idAluno=' + idAluno + '&idCurso=' + idCurso,
		headers: {
			'Content-Type': 'application/json',
			'Foo-Header': 'foo'
		},
		type: 'GET',
		dataType: 'json',
		success: function(result, status, request) {
			if (result.mensagem == 'Registro encontrado!') {
				alunoCursoCarregado = JSON.parse(JSON.stringify(result));
				//Se a situação for 2 então está concluído
				if (alunoCursoCarregado.situacao == 2) {
					botaoCertificado.removeAttribute("hidden");
				}
			} else {
				botaoInscreverSe.removeAttribute("hidden");
			}
		},
		error: function(request, status, erro) {
			exibirMensagemAlunoCurso('Erro ao tentar verificar inscrição!');
			botaoInscreverSe.removeAttribute("hidden");
		},
		complete: function (jqXHR, textStatus) {
		}
	});
}

function imprimirCertificado() {
	if (alunoCursoCarregado.id != null) {
		window.open(urlServer + 'certificado/imprimir/' + alunoCursoCarregado.id, '_blank');
	} else {
		exibirMensagemAlunoCurso('Erro ao tentar gerar seu certificado!');
	}
}