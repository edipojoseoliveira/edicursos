function enviarRespostas() {
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
}

function exibirResultado(atividade) {
	atualizaClasseCampo(document.getElementById('sOpCompResp01'), 
		atividade.resultado01 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp01'),
		atividade.resultado01 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp02'), 
		atividade.resultado02 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp02'),
		atividade.resultado02 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp03'), 
		atividade.resultado03 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp03'),
		atividade.resultado03 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp04'), 
		atividade.resultado04 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp04'),
		atividade.resultado04 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp05'), 
		atividade.resultado05 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp05'),
		atividade.resultado05 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp06'), 
		atividade.resultado06 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp06'),
		atividade.resultado06 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp07'), 
		atividade.resultado07 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp07'),
		atividade.resultado07 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp08'), 
		atividade.resultado08 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp08'),
		atividade.resultado08 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp09'), 
		atividade.resultado09 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp09'),
		atividade.resultado09 == true ? 'Resposta certa!' : 'Resposta errada!');

	atualizaClasseCampo(document.getElementById('sOpCompResp10'), 
		atividade.resultado10 == true ? 'is-valid' : 'is-invalid',
		document.getElementById('fOpCompResp10'),
		atividade.resultado10 == true ? 'Resposta certa!' : 'Resposta errada!');
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