function limparMensagensAluno() {
	var mensagensCadastreSe = document.getElementById("mensagensCadastreSe");
	mensagensCadastreSe.innerHTML = '';
}

function exibirMensagemAluno(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-danger" role="alert">' +
		mensagem +
	'</div>';

	var mensagensCadastreSe = document.getElementById("mensagensCadastreSe");
	mensagensCadastreSe.innerHTML = mensagemHTML;
}

function validarCamposAluno() {
	if (document.getElementById('inputNome').value == null ||
		document.getElementById('inputNome').value == '') {
		exibirMensagemAluno('Digite seu nome por favor.');
		return false;
	} else if (document.getElementById('inputSobrenome').value == null ||
		document.getElementById('inputSobrenome').value == '') {
		exibirMensagemAluno('Digite seu sobrenome por favor.');
		return false;
	} else if (document.getElementById('inputEmail').value == null ||
		document.getElementById('inputEmail').value == '') {
		exibirMensagemAluno('Digite seu e-mail por favor.');
		return false;
	} else if (document.getElementById('inputSenha').value == null ||
		document.getElementById('inputSenha').value == '') {
		exibirMensagemAluno('Digite sua senha por favor.');
		return false;
	} else {
		return true;
	}
}

function exibirLoading() {
	var loadingHTML = 
	'<div class="progress" style="margin-bottom: 15px;">' +
		'<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>' +
	'</div>';
	
	var loadingCadastreSe = document.getElementById("loadingCadastreSe");
	loadingCadastreSe.innerHTML = loadingHTML;
	
	document.getElementById('btnCadastreSeAluno').disabled = true;
	document.getElementById('btnCancelarAluno').disabled = true;	
}

function fecharLoading() {
	var loadingCadastreSe = document.getElementById("loadingCadastreSe");
	loadingCadastreSe.innerHTML = '';
	
	document.getElementById('btnCadastreSeAluno').disabled = false;
	document.getElementById('btnCancelarAluno').disabled = false;
}

function alunoSalvar() {
	limparMensagensAluno();
	
	if (validarCamposAluno()) {
		var conta = new Object();
		conta.email = document.getElementById('inputEmail').value;
		conta.senha = document.getElementById('inputSenha').value;

		var aluno = new Object();
		aluno.nome = document.getElementById('inputNome').value;
		aluno.sobrenome = document.getElementById('inputSobrenome').value;
		aluno.conta = conta;

		exibirLoading();
		
		$.ajax({
			url: 'http://192.168.100.34:8080/EdiCursos/api/aluno/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(aluno),
			success: function(result, status, request) {
				console.log('Success: ' + result);
				$('#modalCadastreSe').modal('hide');
			},
			error: function(request, status, erro) {
				exibirMensagemAluno('Erro ao tentar conectar ao servidor. ' + JSON.stringify(erro));
			},
			complete: function (jqXHR, textStatus) {
				console.log('Fim: ' + textStatus);
				fecharLoading();
			}
		});
	}
}