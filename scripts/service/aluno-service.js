function alunoSalvar() {
	var conta = new Object();
	conta.email = document.getElementById('inputEmail').value;
	conta.senha = document.getElementById('inputSenha').value;

	var aluno = new Object();
	aluno.nome = document.getElementById('inputNome').value;
	aluno.sobrenome = document.getElementById('inputSobrenome').value;
	aluno.conta = conta;

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
			console.log('Error: ' + JSON.stringify(erro));
		},
		complete: function (jqXHR, textStatus) {
			console.log('Fim: ' + textStatus);
		}
	});
}