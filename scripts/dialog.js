var dialogsHTML = 
'<div class="modal fade" id="modalEntrar" tabindex="-1" role="dialog" aria-labelledby="entrarModalCenterTitle" aria-hidden="true">' + 
	'<div class="modal-dialog modal-dialog-centered" role="document">' +
		'<div class="modal-content">' +
			'<div class="modal-header">' +
				'<h5 class="modal-title" id="entrarModalCenterTitle">Entrar</h5>' +
				'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
					'<span aria-hidden="true">&times;</span>' +
				'</button>' +
			'</div>' +
			'<div class="modal-body">' +
				'<div id="mensagensEntrar"></div>' +
				'<form>' +
					'<div class="form-group">' +
						'<input type="mail" id="inputLoginEmail" class="form-control" placeholder="E-mail">' +
					'</div>' +
					'<div class="form-group">' +
						'<input type="password" id="inputLoginSenha" class="form-control" placeholder="Senha">' +
					'</div>' +
					'<div class="form-group">' +
						'<button type="button" class="btn btn-primary btn-block" onclick="contaEntrar()">Entrar</button>' +
					'</div>' +
					'<div class="form-group text-center">' +
						'<span><a onclick="fechaLoginAbreRedefinirSenha()" href="#">Esqueci minha senha</a></span>' +
					'</div>' +
					'<div class="form-group text-center">' +
						'<span>Ou se ainda não se cadastrou <a onclick="fechaLoginAbreCadastro()" href="#">clique aqui</a>!</span>' +
					'</div>' +
				'</form>' +
			'</div>' +
		'</div>' +
	'</div>' +
'</div>' +

'<div class="modal fade" id="modalRedefinirSenha" tabindex="-1" role="dialog" aria-labelledby="redefinirSenhaModalCenterTitle" aria-hidden="true">' + 
	'<div class="modal-dialog modal-dialog-centered" role="document">' +
		'<div class="modal-content">' +
			'<div class="modal-header">' +
				'<h5 class="modal-title" id="redefinirSenhaModalCenterTitle">Redefinir senha</h5>' +
				'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
					'<span aria-hidden="true">&times;</span>' +
				'</button>' +
			'</div>' +
			'<div class="modal-body">' +
				'<div id="mensagensRedefinirSenhha"></div>' +
				'<form>' +
					'<div class="form-group text-center">' +
						'<span>Informe o mesmo e-mail que utilizou ao criar sua conta.</span>' +
					'</div>' +
					'<div class="form-group">' +
						'<input type="mail" id="inputRedefinirSenhaEmail" class="form-control" placeholder="E-mail">' +
					'</div>' +
					'<div class="form-group">' +
						'<button type="button" class="btn btn-primary btn-block" onclick="contaRedefinirSenha()">Enviar e-mail</button>' +
					'</div>' +
				'</form>' +
			'</div>' +
		'</div>' +
	'</div>' +
'</div>' +

'<div class="modal fade" id="modalMensagemRedefinirSenha" tabindex="-1" role="dialog" aria-labelledby="mensagemRedefinirSenhaModalCenterTitle" aria-hidden="true">' + 
	'<div class="modal-dialog modal-dialog-centered" role="document">' +
		'<div class="modal-content">' +
			'<div class="modal-header">' +
				'<h5 class="modal-title" id="mensagemRedefinirSenhaModalCenterTitle">Redefinir senha</h5>' +
				'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
					'<span aria-hidden="true">&times;</span>' +
				'</button>' +
			'</div>' +
			'<div class="modal-body">' +
				'<div class="alert alert-success" role="alert">' +
					'<h4 class="alert-heading">E-mail enviado</h4>' +
					'<p>Você deverá receber em breve um e-mail permitindo a redefinição de sua senha. Caso não encontre o e-mail verifique seus spams e lixo por favor.</p>' +
				'</div>' +
			'</div>' +
			'<div class="modal-footer">' + 
				'<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>' + 
			'</div>' +
		'</div>' +
	'</div>' +
'</div>' +

'<div class="modal fade" id="modalMensagemSenhaRedefinida" tabindex="-1" role="dialog" aria-labelledby="mensagemSenhaRedefinidaModalCenterTitle" aria-hidden="true">' + 
	'<div class="modal-dialog modal-dialog-centered" role="document">' +
		'<div class="modal-content">' +
			'<div class="modal-header">' +
				'<h5 class="modal-title" id="mensagemSenhaRedefinidaModalCenterTitle">Redefição de senha</h5>' +
			'</div>' +
			'<div class="modal-body">' +
				'<div class="alert alert-success" role="alert">' +
					'Sua senha foi atualizada com sucesso.' +
				'</div>' +
			'</div>' +
			'<div class="modal-footer">' +
				'<a href="https://www.edicursos.com.br/">' + 
					'<button type="button" class="btn btn-primary">OK</button>' + 
				'</a>'
			'</div>' +
		'</div>' +
	'</div>' +
'</div>' +

'<div class="modal fade" id="modalCadastreSe" tabindex="-1" role="dialog" aria-labelledby="CadastreSeModalCenterTitle" aria-hidden="true">' + 
	'<div class="modal-dialog modal-dialog-centered" role="document">' +
		'<div class="modal-content">' +
			'<div class="modal-header">' +
				'<h5 class="modal-title" id="CadastreSeModalCenterTitle">Cadastre-se</h5>' +
				'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
					'<span aria-hidden="true">&times;</span>' +
				'</button>' +
			'</div>' +
			'<div class="modal-body">' +
				'<form>' +
					'<div class="form-group">' +
						'<input type="text" id="inputNome" class="form-control" placeholder="Nome">' +
					'</div>' +
					'<div class="form-group">' +
						'<input type="text" id="inputSobrenome" class="form-control" placeholder="Sobrenome">' +
					'</div>' +
					'<div class="form-group">' +
						'<input type="mail" id="inputEmail" class="form-control" placeholder="E-mail">' +
					'</div>' +
					'<div class="form-group">' +
						'<input type="password" id="inputSenha" class="form-control" placeholder="Senha">' +
					'</div>' +
				'</form>' +
			'</div>' + 
			'<div class="modal-footer">' + 
				'<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>' + 
				'<button type="button" class="btn btn-primary" onclick="alunoSalvar()">Cadastre-se</button>' +
			'</div>' +
		'</div>' +
	'</div>' +
'</div>';

function fechaLoginAbreCadastro() {
	$('#modalEntrar').modal('hide');
	$('#modalCadastreSe').modal('show');
}

function fechaLoginAbreRedefinirSenha() {
	$('#modalEntrar').modal('hide');
	$('#modalRedefinirSenha').modal('show');
}

function fechaRedefinirSenhaAbreMensagem() {
	$('#modalRedefinirSenha').modal('hide');
	$('#modalMensagemRedefinirSenha').modal('show');
}

function abreMensagemSenhaRedefinida() {
	$('#modalMensagemSenhaRedefinida').modal('show');
}

var dialogs = document.getElementById("dialogs");
dialogs.innerHTML = dialogsHTML;