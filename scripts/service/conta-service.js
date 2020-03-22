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

function exibirMensagemRedefinirSenha(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-danger" role="alert">' +
		mensagem +
	'</div>';

	var mensagensRedefinirSenha = document.getElementById("mensagensRedefinirSenhha");
	mensagensRedefinirSenha.innerHTML = mensagemHTML;
}

function limparMensagensRedefinirSenha() {
	var mensagensRedefinirSenha = document.getElementById("mensagensRedefinirSenhha");
	mensagensRedefinirSenha.innerHTML = '';
}

function exibirMensagemTelaRedefinirSenha(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-danger" role="alert">' +
		mensagem +
	'</div>';

	var mensagensRedefinirSenha = document.getElementById("mensagensTelaRedefinirSenhha");
	mensagensRedefinirSenha.innerHTML = mensagemHTML;
}

function limparMensagensTelaRedefinirSenha() {
	var mensagensRedefinirSenha = document.getElementById("mensagensTelaRedefinirSenhha");
	mensagensRedefinirSenha.innerHTML = '';
}

function exibirLoadingEntrar() {
	var loadingHTML = 
	'<div class="progress" style="margin-bottom: 15px;">' +
		'<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>' +
	'</div>';
	
	var loadingEntrar = document.getElementById("loadingEntrar");
	loadingEntrar.innerHTML = loadingHTML;
	
	document.getElementById('btnEntrarConta').disabled = true;	
}

function fecharLoadingEntrar() {
	var loadingEntrar = document.getElementById("loadingEntrar");
	loadingEntrar.innerHTML = '';
	
	document.getElementById('btnEntrarConta').disabled = false;
}

function exibirLoadingRedefinirSenhha() {
	var loadingHTML = 
	'<div class="progress" style="margin-bottom: 15px;">' +
		'<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>' +
	'</div>';
	
	var loadingRedefinirSenhha = document.getElementById("loadingRedefinirSenhha");
	loadingRedefinirSenhha.innerHTML = loadingHTML;
	
	document.getElementById('btnRedefinirSenha').disabled = true;	
}

function fecharLoadingRedefinirSenhha() {
	var loadingRedefinirSenhha = document.getElementById("loadingRedefinirSenhha");
	loadingRedefinirSenhha.innerHTML = '';
	
	document.getElementById('btnRedefinirSenha').disabled = false;
}

function exibirLoadingTelaRedefinirSenhha() {
	var loadingHTML = 
	'<div class="progress" style="margin-bottom: 15px;">' +
		'<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>' +
	'</div>';
	
	var loadingTelaRedefinirSenhha = document.getElementById("loadingTelaRedefinirSenhha");
	loadingTelaRedefinirSenhha.innerHTML = loadingHTML;
	
	document.getElementById('btnSalvarSenhaRedefinida').disabled = true;	
}

function fecharLoadingTelaRedefinirSenhha() {
	var loadingTelaRedefinirSenhha = document.getElementById("loadingTelaRedefinirSenhha");
	loadingTelaRedefinirSenhha.innerHTML = '';
	
	document.getElementById('btnSalvarSenhaRedefinida').disabled = false;
}

function validarCampos() {
	if (document.getElementById('inputLoginEmail').value == null ||
		document.getElementById('inputLoginEmail').value == '') {
		exibirMensagem('Digite seu e-mail por favor.');
		return false;
	} else if (document.getElementById('inputLoginSenha').value == null ||
		document.getElementById('inputLoginSenha').value == '') {
		exibirMensagem('Digite sua senha por favor.');
		return false;
	} else {
		return true;
	}
}

function contaEntrar() {
	limparMensagens();
	if (validarCampos()) {
		var conta = new Object();
		conta.email = document.getElementById('inputLoginEmail').value;
		conta.senha = document.getElementById('inputLoginSenha').value;

		exibirLoadingEntrar();

		$.ajax({
			url: urlServer + 'conta/entrar?email=' + conta.email + '&senha=' + conta.senha,
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
				fecharLoadingEntrar()
			}
		});
	}
}

function contaRedefinirSenha() {
	limparMensagensRedefinirSenha();
	if (document.getElementById('inputRedefinirSenhaEmail').value == null ||
		document.getElementById('inputRedefinirSenhaEmail').value == '') {
		exibirMensagemRedefinirSenha('Digite seu e-mail por favor.');
		return false;
	} else {
		var conta = new Object();
		conta.email = document.getElementById('inputRedefinirSenhaEmail').value;
		
		exibirLoadingRedefinirSenhha();
		
		$.ajax({
			url: urlServer + 'conta/enviar-email-redefinir-senha?email=' + conta.email,
			headers: {
		        'Content-Type': 'application/json',
		        'Foo-Header': 'foo'
		    },
			type: 'GET',
			dataType: 'json',
			success: function(result, status, request) {
				if (result.mensagem == 'E-mail enviado com sucesso!') {
					//Tentando chamar o método que está no arquivo dialog.js
					fechaRedefinirSenhaAbreMensagem();
				} else {
					exibirMensagemRedefinirSenha(result.mensagem);
				}
			},
			error: function(request, status, erro) {
				exibirMensagemRedefinirSenha('Erro ao tentar redefinir sua senha!');
			},
			complete: function (jqXHR, textStatus) {
				fecharLoadingRedefinirSenhha()
			}
		});
	}		
}

function validarCamposParaRedefinirSenha() {
	if (document.getElementById('inputNovaSenha').value == null || document.getElementById('inputNovaSenha').value == '') {
		exibirMensagemTelaRedefinirSenha('Informe a nova senha!');
		return false;
	} else if (document.getElementById('inputNovaSenhaConfirmacao').value == null || document.getElementById('inputNovaSenhaConfirmacao').value == '') {
		exibirMensagemTelaRedefinirSenha('Confirme a nova senha!');
		return false;
	} else if (document.getElementById('inputNovaSenha').value != document.getElementById('inputNovaSenhaConfirmacao').value) {
		exibirMensagemTelaRedefinirSenha('As senhas informadas são diferentes, verifique as informações!');
		return false;
	} else {
		return true;
	}
}

function salvarSenhaRedefinida() {
	limparMensagensTelaRedefinirSenha();
	
	var query = location.search.slice(1);
	var partes = query.split('&');
	var data = {};
	partes.forEach(function(parte) {
		var chaveValor = parte.split('=');
		var chave = chaveValor[0];
		var valor = chaveValor[1];
		data[chave] = valor;
	});

	if (validarCamposParaRedefinirSenha()) {
		if (data['e'] != null) {
			var conta = new Object();
			//O e-mail da conta deve vir no parâmetro "e" da url
			conta.email = data['e'];
			conta.senha = document.getElementById('inputSenha').value;
			
			exibirLoadingTelaRedefinirSenhha();
			
			$.ajax({
				url: urlServer + 'conta/redefinir-senha',
				headers: {
					'Content-Type': 'application/json',
					'Foo-Header': 'foo'
				},
				type: 'POST',
				data: JSON.stringify(conta),
				success: function(result, status, request) {
					if (result.mensagem == 'Senha redefinida com sucesso!') {
						//Tentando chamar o método que está no arquivo dialog.js
						abreMensagemSenhaRedefinida();
					} else {
						exibirMensagemTelaRedefinirSenha(result.mensagem);
					}
				},
				error: function(request, status, erro) {
					exibirMensagemTelaRedefinirSenha('Erro ao tentar redefinir a senha: ' + JSON.stringify(erro));
				},
				complete: function (jqXHR, textStatus) {
					fecharLoadingTelaRedefinirSenhha();
				}
			});
		} else {
			exibirMensagemTelaRedefinirSenha('Erro ao tentar redefinir sua senha, acesse seu e-mail e clique novamente no botão "Redefinir senha"!');
		}
	}
}