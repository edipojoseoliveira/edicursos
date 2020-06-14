var alunoAulaCarregado = new Object();
var botaoMarcarConcluida = document.getElementById("btnMarcarConcluida");
var botaoDesmarcarConcluida = document.getElementById("btnDesmarcarConcluida");

function verificarSituacaoAula(idAulaAtual, idCursoAtual) {
	/*
	var conta = JSON.parse(localStorage.getItem('conta'));
	var idAluno = conta.codigo;
	var idAula = idAulaAtual;
	
	$.ajax({
		url: urlServer + 'aluno-aula/consultar?idAluno=' + idAluno + '&idAula=' + idAula,
		headers: {
			'Content-Type': 'application/json',
			'Foo-Header': 'foo'
		},
		type: 'GET',
		dataType: 'json',
		success: function(result, status, request) {
			if (result.mensagem == 'Registro encontrado!') {
				alunoAulaCarregado = JSON.parse(JSON.stringify(result));
				//Se a situação for 1 então está concluído
				if (alunoAulaCarregado.situacao == 1) {
					botaoDesmarcarConcluida.removeAttribute("hidden");
					botaoMarcarConcluida.setAttribute("hidden", "true");
				}
			}
		},
		error: function(request, status, erro) {
			exibirMensagemAlunoAula('Erro ao tentar verificar inscrição!');
		},
		complete: function (jqXHR, textStatus) {
			//console.log('Requisição finalizada: ' + textStatus);
		}
	});
	*/

	var pagina = '';

	if (idCursoAtual == 1) {//Logica de programacao
		if (idAulaAtual == 1) {
			pagina = 'logica-de-programacao/introducao-logica-programacao';
		} else if (idAulaAtual == 2) {
			pagina = 'logica-de-programacao/video-aula-acessando-app-inventor';
		} else if (idAulaAtual == 3) {
			pagina = 'logica-de-programacao/video-aula-como-criar-projeto-app-inventor';
		} else if (idAulaAtual == 4) {
			pagina = 'logica-de-programacao/video-aula-concluindo-primeiro-aplicativo-app-inventor';
		} else if (idAulaAtual == 5) {
			pagina = 'logica-de-programacao/video-aula-testando-aplicativo';
		} else if (idAulaAtual == 6) {
			pagina = 'logica-de-programacao/o-que-sao-variaveis';
		} else if (idAulaAtual == 7) {
			pagina = 'logica-de-programacao/video-aula-primeiro-aplicativo-variaveis';
		} else if (idAulaAtual == 8) {
			pagina = 'logica-de-programacao/video-aula-gerando-o-instalador-dos-aplicativos';
		} else if (idAulaAtual == 9) {
			pagina = 'logica-de-programacao/operadores-matematicos';
		} else if (idAulaAtual == 10) {
			pagina = 'logica-de-programacao/video-aula-primeiro-aplicativo-operadores-matematicos';
		} else if (idAulaAtual == 11) {
			pagina = 'logica-de-programacao/video-aula-desenvolvendo-uma-calculadora';
		} else if (idAulaAtual == 12) {
			pagina = 'logica-de-programacao/operadores-comparacao';
		} else if (idAulaAtual == 13) {
			pagina = 'logica-de-programacao/atividade-operadores-comparacao';
		} else if (idAulaAtual == 14) {
			pagina = 'logica-de-programacao/video-aula-primeiro-aplicativo-operadores-comparacao';
		} else if (idAulaAtual == 15) {
			pagina = 'logica-de-programacao/video-aula-concluindo-calculadora-de-media';
		} else if (idAulaAtual == 16) {
			pagina = 'logica-de-programacao/estrutura-condicional';
		} else if (idAulaAtual == 17) {
			pagina = 'logica-de-programacao/video-aula-primeiro-aplicativo-estrutura-condicional';
		} else if (idAulaAtual == 18) {
			pagina = 'logica-de-programacao/operadores-logicos';
		} else if (idAulaAtual == 19) {
			pagina = 'logica-de-programacao/video-aula-primeiro-aplicativo-operadores-logicos';
		} else if (idAulaAtual == 20) {
			pagina = 'logica-de-programacao/video-aula-primeiro-aplicativo-operadores-logicos-segunda-parte';
		} else if (idAulaAtual == 21) {
			pagina = 'logica-de-programacao/estruturas-de-repeticao';
		} else if (idAulaAtual == 22) {
			pagina = 'logica-de-programacao/video-aula-aplicativo-estrutura-de-repeticao-for';
		} else if (idAulaAtual == 23) {
			pagina = 'logica-de-programacao/video-aula-aplicativo-gera-tabuada';
		} else if (idAulaAtual == 24) {
			pagina = 'logica-de-programacao/procedimentos';
		} else if (idAulaAtual == 25) {
			pagina = 'logica-de-programacao/video-aula-desenvolvendo-um-conversor-de-moedas-primeira-parte';
		} else if (idAulaAtual == 26) {
			pagina = 'logica-de-programacao/video-aula-desenvolvendo-um-conversor-de-moedas-segunda-parte';
		} else if (idAulaAtual == 27) {
			pagina = 'logica-de-programacao/banco-de-dados';
		} else if (idAulaAtual == 28) {
			pagina = 'logica-de-programacao/video-aula-desenvolvendo-uma-agenda-primeira-parte';
		} else if (idAulaAtual == 29) {
			pagina = 'logica-de-programacao/video-aula-desenvolvendo-uma-agenda-segunda-parte';
		} else if (idAulaAtual == 30) {
			pagina = 'logica-de-programacao/video-aula-publicando-aplicativos-na-play-store';
		}
	} else if (idCursoAtual == 2) {//Desenvolvimentode páginas web
		if (idAulaAtual == 1) {
			pagina = 'desenvolvimento-de-paginas-web/introducao-ao-curso';
		} else if (idAulaAtual == 2) {
			pagina = 'desenvolvimento-de-paginas-web/historia-da-internet';
		} else if (idAulaAtual == 3) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-preparando-ambiente-de-desenvolvimento';
		} else if (idAulaAtual == 4) {
			pagina = 'desenvolvimento-de-paginas-web/estrutura-basica-de-uma-pagina-html';
		} else if (idAulaAtual == 5) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-conhecendo-estrutura-basica-do-html';
		} else if (idAulaAtual == 6) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-usar-tag-meta-viewport';
		} else if (idAulaAtual == 7) {
			pagina = 'desenvolvimento-de-paginas-web/definindo-layout-do-site';
		} else if (idAulaAtual == 8) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-definindo-layout-do-site-com-html';
		} else if (idAulaAtual == 9) {
			pagina = 'desenvolvimento-de-paginas-web/como-usar-css-em-paginas-html';
		} else if (idAulaAtual == 10) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-aplicando-css-ao-header-da-pagina';
		} else if (idAulaAtual == 11) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-criando-listas-com-html';
		} else if (idAulaAtual == 12) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-criar-barra-de-navegacao-do-site';
		} else if (idAulaAtual == 13) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-usar-links-no-html';
		} else if (idAulaAtual == 14) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-inserir-imagens-nas-paginas-html';
		} else if (idAulaAtual == 15) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-fixar-barra-lateral-do-site-com-css';
		} else if (idAulaAtual == 16) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-concluindo-barra-lateral-do-site';
		} else if (idAulaAtual == 17) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-desenvolvendo-rodape-do-site';
		} else if (idAulaAtual == 18) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-criar-e-usar-favicon-no-site';
		} else if (idAulaAtual == 19) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-separar-css-de-html';
		} else if (idAulaAtual == 20) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-inserir-videos-no-site';
		} else if (idAulaAtual == 21) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-formatacao-de-texto-no-html';
		} else if (idAulaAtual == 22) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-deixar-o-site-responsivo';
		} else if (idAulaAtual == 23) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-criar-formularios-no-html';
		} else if (idAulaAtual == 24) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-aplicar-css-em-formularios-html';
		} else if (idAulaAtual == 25) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-formulario-responsivo-com-html-e-css';
		} else if (idAulaAtual == 26) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-validacao-de-campos-em-formularios-html';
		} else if (idAulaAtual == 27) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-usar-a-propriedade-position-do-css';
		} else if (idAulaAtual == 28) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-como-adicionar-icones-nos-inputs';
		} else if (idAulaAtual == 29) {
			pagina = 'desenvolvimento-de-paginas-web/video-aula-enviando-dados-formulario-contato-para-email';
		}
	}

	if (localStorage.getItem(pagina) == 'OK') {
		botaoDesmarcarConcluida.removeAttribute("hidden");
		botaoMarcarConcluida.setAttribute("hidden", "true");
	}
}

function limparMensagensAlunoAula() {
	var mensagensAlunoAula = document.getElementById("mensagensAlunoAula");
	mensagensAlunoAula.innerHTML = '';
}

function exibirMensagemAlunoAula(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-danger" role="alert">' +
		mensagem +
	'</div>';

	var mensagensAlunoAula = document.getElementById("mensagensAlunoAula");
	mensagensAlunoAula.innerHTML = mensagemHTML;
}

function marcarAulaComoConcluida(idAula, pagina) {
	limparMensagensAlunoAula();
	
	botaoDesmarcarConcluida.removeAttribute("hidden");
	botaoMarcarConcluida.setAttribute("hidden", "true");
	localStorage.setItem(pagina, 'OK');

	/*
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		var aula = new Object();
		var aluno = new Object();
		var alunoAula = new Object();

		aula.id = idAula;
		aluno.id = conta.codigo;

		alunoAula.aula = aula;
		alunoAula.aluno = aluno;
		alunoAula.situacao = 1;
		
		$.ajax({
			url: urlServer + 'aluno-aula/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(alunoAula),
			success: function(result, status, request) {
				botaoDesmarcarConcluida.removeAttribute("hidden");
				botaoMarcarConcluida.setAttribute("hidden", "true");
				localStorage.setItem(pagina, 'OK');
			},
			error: function(request, status, erro) {
				exibirMensagemAlunoAula('Erro ao tentar conectar ao servidor.');
			},
			complete: function (jqXHR, textStatus) {
				//console.log('Fim: ' + textStatus);
			}
		});
	}
	*/
}

function desmarcarAulaComoConcluida(idAula, pagina) {
	limparMensagensAlunoAula();
	
	botaoMarcarConcluida.removeAttribute("hidden");
	botaoDesmarcarConcluida.setAttribute("hidden", "true");
	localStorage.removeItem(pagina);

	/*
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		var aula = new Object();
		var aluno = new Object();
		var alunoAula = new Object();

		aula.id = idAula;
		aluno.id = conta.codigo;

		alunoAula.aula = aula;
		alunoAula.aluno = aluno;
		alunoAula.situacao = 0;
		
		$.ajax({
			url: urlServer + 'aluno-aula/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(alunoAula),
			success: function(result, status, request) {
				botaoMarcarConcluida.removeAttribute("hidden");
				botaoDesmarcarConcluida.setAttribute("hidden", "true");
				localStorage.removeItem(pagina);
			},
			error: function(request, status, erro) {
				exibirMensagemAlunoAula('Erro ao tentar conectar ao servidor.');
			},
			complete: function (jqXHR, textStatus) {
				//console.log('Fim: ' + textStatus);
			}
		});
	}
	*/
}

function proximaAula(idAula, pagina, proximaPagina) {
	limparMensagensAlunoAula();
	
	marcarAulaComoConcluida(idAula, pagina);
	window.location.href = urlSite + "cursos/" + proximaPagina + ".html";

	/*
	if (localStorage.getItem('conta') != null && localStorage.getItem('conta') != '') {
		var conta = JSON.parse(localStorage.getItem('conta'));

		var aula = new Object();
		var aluno = new Object();
		var alunoAula = new Object();

		aula.id = idAula;
		aluno.id = conta.codigo;

		alunoAula.aula = aula;
		alunoAula.aluno = aluno;
		alunoAula.situacao = 1;
		
		$.ajax({
			url: urlServer + 'aluno-aula/salvar',
			headers: {
				'Content-Type': 'application/json',
				'Foo-Header': 'foo'
			},
			type: 'POST',
			data: JSON.stringify(alunoAula),
			success: function(result, status, request) {
				botaoDesmarcarConcluida.removeAttribute("hidden");
				botaoMarcarConcluida.setAttribute("hidden", "true");
				localStorage.removeItem(pagina);
				window.location.href = urlSite + "cursos/" + proximaPagina + ".html";
			},
			error: function(request, status, erro) {
				exibirMensagemAlunoAula('Erro ao tentar conectar ao servidor.');
			},
			complete: function (jqXHR, textStatus) {
				//console.log('Fim: ' + textStatus);
			}
		});
	}
	*/
}