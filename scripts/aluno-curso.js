function salvarAlunoCurso(idCurso) {
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.stringify(localStorage.getItem('conta'));

		var curso = new Object();
		var aluno = new Object();
		var alunoCurso = new Object();

		curso.id = idCurso;
		aluno.id = conta.codigo;

		alunoCurso.curso = curso;
		alunoCurso.aluno = aluno;
		alunoCurso.situacao = 1;
	}
}

function imprimirCertificado() {
	window.open('http://192.168.100.34:8080/EdiCursos/api/certificado/imprimir/1', '_blank');
}