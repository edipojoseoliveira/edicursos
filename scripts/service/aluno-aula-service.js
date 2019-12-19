var alunoAulaCarregado = new Object();
var botaoMarcarConcluida = document.getElementById("btnMarcarConcluida");
var botaoDesmarcarConcluida = document.getElementById("btnDesmarcarConcluida");

function verificarSituacaoAula(idAulaAtual) {
	var conta = JSON.parse(localStorage.getItem('conta'));
	var idAluno = conta.codigo;
	var idAula = idAulaAtual;
	
	$.ajax({
		url: 'http://192.168.100.34:8080/EdiCursos/api/aluno-aula/consultar?idAluno=' + idAluno + '&idAula=' + idAula,
		headers: {
			'Content-Type': 'application/json',
			'Foo-Header': 'foo'
		},
		type: 'GET',
		dataType: 'json',
		success: function(result, status, request) {
			if (result.mensagem == 'Registro encontrado!') {
				alunoAulaCarregado = JSON.parse(JSON.stringify(result));
				//Se a situação for 1 então está concluído
				if (alunoAulaCarregado.situacao == 1) {
					botaoDesmarcarConcluida.removeAttribute("hidden");
					botaoMarcarConcluida.setAttribute("hidden", "true");
				}
			}
		},
		error: function(request, status, erro) {
			exibirMensagemAlunoAula('Erro ao tentar verificar inscrição!');
		},
		complete: function (jqXHR, textStatus) {
			//console.log('Requisição finalizada: ' + textStatus);
		}
	});
}

function limparMensagensAlunoAula() {
	var mensagensAlunoCurso = document.getElementById("mensagensAlunoAula");
	mensagensAlunoCurso.innerHTML = '';
}

function exibirMensagemAlunoAula(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-danger" role="alert">' +
		mensagem +
	'</div>';

	var mensagensAlunoAula = document.getElementById("mensagensAlunoAula");
	mensagensAlunoAula.innerHTML = mensagemHTML;
}

function marcarAulaComoConcluida(idAula, pagina) {
	limparMensagensAlunoAula();
	
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		var aula = new Object();
		var aluno = new Object();
		var alunoAula = new Object();

		aula.id = idAula;
		aluno.id = conta.codigo;

		alunoAula.aula = aula;
		alunoAula.aluno = aluno;
		alunoAula.situacao = 1;
		
		$.ajax({
			url: 'http://192.168.100.34:8080/EdiCursos/api/aluno-aula/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(alunoAula),
			success: function(result, status, request) {
				botaoDesmarcarConcluida.removeAttribute("hidden");
				botaoMarcarConcluida.setAttribute("hidden", "true");
				localStorage.setItem(pagina, 'OK');
			},
			error: function(request, status, erro) {
				exibirMensagemAlunoAula('Erro ao tentar conectar ao servidor.');
			},
			complete: function (jqXHR, textStatus) {
				//console.log('Fim: ' + textStatus);
			}
		});
	}
}

function desmarcarAulaComoConcluida(idAula, pagina) {
	limparMensagensAlunoAula();
	
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		var aula = new Object();
		var aluno = new Object();
		var alunoAula = new Object();

		aula.id = idAula;
		aluno.id = conta.codigo;

		alunoAula.aula = aula;
		alunoAula.aluno = aluno;
		alunoAula.situacao = 0;
		
		$.ajax({
			url: 'http://192.168.100.34:8080/EdiCursos/api/aluno-aula/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(alunoAula),
			success: function(result, status, request) {
				botaoMarcarConcluida.removeAttribute("hidden");
				botaoDesmarcarConcluida.setAttribute("hidden", "true");
				localStorage.removeItem(pagina);
			},
			error: function(request, status, erro) {
				exibirMensagemAlunoAula('Erro ao tentar conectar ao servidor.');
			},
			complete: function (jqXHR, textStatus) {
				//console.log('Fim: ' + textStatus);
			}
		});
	}
}

function proximaAula(idAula, pagina, proximaPagina) {
	limparMensagensAlunoAula();
	
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		var aula = new Object();
		var aluno = new Object();
		var alunoAula = new Object();

		aula.id = idAula;
		aluno.id = conta.codigo;

		alunoAula.aula = aula;
		alunoAula.aluno = aluno;
		alunoAula.situacao = 1;
		
		$.ajax({
			url: 'http://192.168.100.34:8080/EdiCursos/api/aluno-aula/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(alunoAula),
			success: function(result, status, request) {
				botaoDesmarcarConcluida.removeAttribute("hidden");
				botaoMarcarConcluida.setAttribute("hidden", "true");
				localStorage.removeItem(pagina);
				window.location.href = "http://localhost:8080/edicursos/cursos/" + proximaPagina + ".html";
			},
			error: function(request, status, erro) {
				exibirMensagemAlunoAula('Erro ao tentar conectar ao servidor.');
			},
			complete: function (jqXHR, textStatus) {
				//console.log('Fim: ' + textStatus);
			}
		});
	}
}