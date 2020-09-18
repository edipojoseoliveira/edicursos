function limparMensagensContato() {
	var mensagensContato = document.getElementById("mensagensContato");
	mensagensContato.innerHTML = '';
}

function limparCamposContato() {
    document.getElementById('inputNomeContato').value = '';
    document.getElementById('inputEmailContato').value = '';
    document.getElementById('inputMensagemContato').value = '';
}

function exibirMensagemContato(mensagem, tipo) {
	var mensagemHTML = 
	'<div class="alert alert-' + tipo + '" role="alert">' +
		mensagem +
	'</div>';

	var mensagensContato = document.getElementById("mensagensContato");
	mensagensContato.innerHTML = mensagemHTML;
}

function validarCamposContato() {
	if (document.getElementById('inputNomeContato').value == null ||
		document.getElementById('inputNomeContato').value == '') {
		exibirMensagemContato('Digite seu nome por favor.', 'danger');
		return false;
	} else if (document.getElementById('inputEmailContato').value == null ||
		document.getElementById('inputEmailContato').value == '') {
        exibirMensagemContato('Digite seu e-mail por favor.', 'danger');
		return false;
	} else if (document.getElementById('inputMensagemContato').value == null ||
		document.getElementById('inputMensagemContato').value == '') {
        exibirMensagemContato('Digite sua mensagem por favor.', 'danger');
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
	
	var loadingContato = document.getElementById("loadingContato");
	loadingContato.innerHTML = loadingHTML;
	
	document.getElementById('btnEnviarMensagem').disabled = true;	
}

function fecharLoading() {
	var loadingContato = document.getElementById("loadingContato");
	loadingContato.innerHTML = '';
	
	document.getElementById('btnEnviarMensagem').disabled = false;
}

function contatoSalvar() {
	limparMensagensContato();
	
	if (validarCamposContato()) {
		var contato = new Object();
		contato.nome = document.getElementById('inputNomeContato').value;
		contato.email = document.getElementById('inputEmailContato').value;
		contato.mensagem = document.getElementById('inputMensagemContato').value;

		exibirLoading();
		
		$.ajax({
			url: urlServer + 'contato',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(contato),
			success: function(result, status, request) {
                exibirMensagemContato('Obrigado pela sua mensagem 😃', 'success');
                limparCamposContato();
			},
			error: function(request, status, erro) {
				exibirMensagemContato('Erro ao tentar conectar ao servidor. ' + JSON.stringify(erro), 'danger');
			},
			complete: function (jqXHR, textStatus) {
				fecharLoading();
			}
		});
	}
}