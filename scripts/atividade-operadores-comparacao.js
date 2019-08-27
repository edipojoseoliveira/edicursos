function enviarRespostas() {
	if (validarRespostas()) {
		var atividade = new Object();
		atividade.resposta01 = document.getElementById('sOpCompResp01').value;
		atividade.resposta02 = document.getElementById('sOpCompResp02').value;
		atividade.resposta03 = document.getElementById('sOpCompResp03').value;
		atividade.resposta04 = document.getElementById('sOpCompResp04').value;
		atividade.resposta05 = document.getElementById('sOpCompResp05').value;
		atividade.resposta06 = document.getElementById('sOpCompResp06').value;
		atividade.resposta07 = document.getElementById('sOpCompResp07').value;
		atividade.resposta08 = document.getElementById('sOpCompResp08').value;
		atividade.resposta09 = document.getElementById('sOpCompResp09').value;
		atividade.resposta10 = document.getElementById('sOpCompResp10').value;

		atividade.resultado01 = (atividade.resposta01 == "false");
		atividade.resultado02 = (atividade.resposta02 == "true");
		atividade.resultado03 = (atividade.resposta03 == "false");
		atividade.resultado04 = (atividade.resposta04 == "true");
		atividade.resultado05 = (atividade.resposta05 == "true");
		atividade.resultado06 = (atividade.resposta06 == ">");
		atividade.resultado07 = (atividade.resposta07 == "<" || atividade.resposta07 == ">");
		atividade.resultado08 = (atividade.resposta08 == "!=");
		atividade.resultado09 = (atividade.resposta09 == "<" || atividade.resposta09 == "=");
		atividade.resultado10 = (atividade.resposta10 == "=");

		var nota = 0;
		nota = atividade.resultado01 == true ? nota + 1 : nota;
		nota = atividade.resultado02 == true ? nota + 1 : nota;
		nota = atividade.resultado03 == true ? nota + 1 : nota;
		nota = atividade.resultado04 == true ? nota + 1 : nota;
		nota = atividade.resultado05 == true ? nota + 1 : nota;
		nota = atividade.resultado06 == true ? nota + 1 : nota;
		nota = atividade.resultado07 == true ? nota + 1 : nota;
		nota = atividade.resultado08 == true ? nota + 1 : nota;
		nota = atividade.resultado09 == true ? nota + 1 : nota;
		nota = atividade.resultado10 == true ? nota + 1 : nota;
		atividade.nota = nota;

		exibirResultado(atividade);
		exibirBotaoProximaAula();
		voltarAoTopo();
	}
}

function validarRespostas() {
	var resultado = true;
	if (document.getElementById('sOpCompResp01').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp01'), 'is-invalid',
			document.getElementById('fOpCompResp01'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp02').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp02'), 'is-invalid',
			document.getElementById('fOpCompResp02'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp03').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp03'), 'is-invalid',
			document.getElementById('fOpCompResp03'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp04').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp04'), 'is-invalid',
			document.getElementById('fOpCompResp04'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp05').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp05'), 'is-invalid',
			document.getElementById('fOpCompResp05'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp06').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp06'), 'is-invalid',
			document.getElementById('fOpCompResp06'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp07').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp07'), 'is-invalid',
			document.getElementById('fOpCompResp07'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp08').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp08'), 'is-invalid',
			document.getElementById('fOpCompResp08'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp09').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp09'), 'is-invalid',
			document.getElementById('fOpCompResp09'), 'Selecione uma resposta!');
		resultado = false;
	}
	if (document.getElementById('sOpCompResp10').value == '') {
		atualizaClasseCampo(document.getElementById('sOpCompResp10'), 'is-invalid',
			document.getElementById('fOpCompResp10'), 'Selecione uma resposta!');
		resultado = false;
	}
	return resultado;
}

function exibirResultado(atividade) {
	atualizaClasseCampo(document.getElementById('sOpCompResp01'), 
		atividade.resultado01 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp01'),
		atividade.resultado01 == true ? 'Resposta certa!' : 'A resposta certa é "Falso" pois 5 não é maior que 18.');

	atualizaClasseCampo(document.getElementById('sOpCompResp02'), 
		atividade.resultado02 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp02'),
		atividade.resultado02 == true ? 'Resposta certa!' : 'A resposta certa é "Verdadeiro" pois 7 é menor que 12.');

	atualizaClasseCampo(document.getElementById('sOpCompResp03'), 
		atividade.resultado03 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp03'),
		atividade.resultado03 == true ? 'Resposta certa!' : 'A resposta certa é "Falso" pois "EdiCursos" é diferente de "edicursos".');

	atualizaClasseCampo(document.getElementById('sOpCompResp04'), 
		atividade.resultado04 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp04'),
		atividade.resultado04 == true ? 'Resposta certa!' : 'A resposta certa é "Verdadeiro" pois 2 é igual a 2.');

	atualizaClasseCampo(document.getElementById('sOpCompResp05'), 
		atividade.resultado05 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp05'),
		atividade.resultado05 == true ? 'Resposta certa!' : 'A resposta certa é "Verdadeiro" pois 14 é maior que 9.');

	atualizaClasseCampo(document.getElementById('sOpCompResp06'), 
		atividade.resultado06 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp06'),
		atividade.resultado06 == true ? 'Resposta certa!' : 'A resposta certa é "Maior ( > )" pois 10 é maior que 9.');

	atualizaClasseCampo(document.getElementById('sOpCompResp07'), 
		atividade.resultado07 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp07'),
		atividade.resultado07 == true ? 'Resposta certa!' : 'A reposta pode ser "Maior ( > )" e "Menor ( < )" pois das duas formas o resultado será "Falso".');

	atualizaClasseCampo(document.getElementById('sOpCompResp08'), 
		atividade.resultado08 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp08'),
		atividade.resultado08 == true ? 'Resposta certa!' : 'A resposta certa é "Diferente ( ≠ )" pois as palavras são diferentes.');

	atualizaClasseCampo(document.getElementById('sOpCompResp09'), 
		atividade.resultado09 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp09'),
		atividade.resultado09 == true ? 'Resposta certa!' : 'A resposta pode ser "Menor ( < )" e "Igual ( = )" pois das duas formas o resultado será "Falso".');

	atualizaClasseCampo(document.getElementById('sOpCompResp10'), 
		atividade.resultado10 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp10'),
		atividade.resultado10 == true ? 'Resposta certa!' : 'A resposta certa é "Igual ( = )" pois as palavras são iguais.');
}

function atualizaClasseCampo(campo, classe, div, mensagem) {
	campo.classList.remove('is-valid');
	campo.classList.remove('is-invalid');
	campo.classList.add(classe);

	div.classList.remove('valid-feedback');
	div.classList.remove('invalid-feedback');
	div.classList.add(classe == 'is-valid' ? 'valid-feedback' : 'invalid-feedback');
	div.innerHTML = mensagem;
}

function exibirBotaoProximaAula() {
	var divBotoes = document.getElementById('divBotoes');
	var botaoProximaAula = 
		'<div class="col-12 col-sm-12 col-md-12 col-lg-12">' +
			'<a href="video-aula-primeiro-aplicativo-operadores-comparacao.html" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true" onclick="gravarVisualizacaoPagina(' + "'" + 'logica-de-programacao/atividade-operadores-comparacao' + "'" + ')">' +
				'Próxima aula' +
			'</a>' +
		'</div>';
	divBotoes.innerHTML = botaoProximaAula;
}

function voltarAoTopo() {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 800);
}