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
					'<span>Se ainda não se cadastrou <a onclick="fechaLoginAbreCadastro()" href="#">clique aqui</a>!</span>' +
				'</form>' +
			'</div>' + 
			'<div class="modal-footer">' + 
				'<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>' + 
				'<button type="button" class="btn btn-primary" onclick="contaEntrar()">Entrar</button>' +
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

var dialogs = document.getElementById("dialogs");
dialogs.innerHTML = dialogsHTML;