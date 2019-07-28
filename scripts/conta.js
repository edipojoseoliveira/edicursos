function exibirMensagem(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-danger" role="alert">' +
		mensagem +
	'</div>';

	var mensagensEntrar = document.getElementById("mensagensEntrar");
	mensagensEntrar.innerHTML = mensagemHTML;
}

function limparMensagens() {
	var mensagensEntrar = document.getElementById("mensagensEntrar");
	mensagensEntrar.innerHTML = '';
}

function fazerRequisicaoServidor(conta) {
	$.ajax({
		url: 'http://localhost:8080/EdiCursos/api/conta/entrar?email=' + conta.email + '&senha=' + conta.senha,
		headers: {
	        'Content-Type': 'application/json',
	        'Foo-Header': 'foo'
	    },
		type: 'GET',
		dataType: 'json',
		success: function(result, status, request) {
			if (result.mensagem == 'Usuário encontrado!') {
				localStorage.setItem('conta', JSON.stringify(result));
				$('#modalEntrar').modal('hide');
			} else {
				exibirMensagem(result.mensagem);
			}
		},
		error: function(request, status, erro) {
			exibirMensagem('Erro ao tentar entrar!');
		},
		complete: function (jqXHR, textStatus) {
			//console.log('Requisição finalizada: ' + textStatus);
		}
	});
}

function entrar() {
	limparMensagens();
	if (document.getElementById('inputLoginEmail').value == null ||
		document.getElementById('inputLoginEmail').value == '') {
		exibirMensagem('Digite seu e-mail por favor.');
	} else if (document.getElementById('inputLoginSenha').value == null ||
			   document.getElementById('inputLoginSenha').value == '') {
		exibirMensagem('Digite sua senha por favor.');
	} else {
		var conta = new Object();
		conta.email = document.getElementById('inputLoginEmail').value;
		conta.senha = document.getElementById('inputLoginSenha').value;

		fazerRequisicaoServidor(conta);
	}
}