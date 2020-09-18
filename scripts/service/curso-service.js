window.onload = function() {
	listarCursos();
}

function listarCursos() {
    var painel = document.getElementById("painel-cursos");
    var cursosHTML = '';

    $.ajax({
        url: urlServer + 'curso',
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'GET',
        dataType: 'json',
        success: function(result, status, request) {
            var cursos = JSON.parse(JSON.stringify(result));
            for (var i = 0; i < cursos.length; i++) {
                cursosHTML = cursosHTML + 
                '<div class="col-md-5 col-sm-10 titulo logica-programacao margin-bottom-15-px">' +
                    '<a href="curso.html?ic=' + cursos[i].id + '">' +
                        '<h2>' + cursos[i].nome + '</h2>' +
                        '<p>' +
                            cursos[i].descricao +
                        '</p>' +
                    '</a>' +
                '</div>';
            }
            painel.innerHTML = cursosHTML;
		},
		error: function(request, status, erro) {
		},
		complete: function (jqXHR, textStatus) {
		}
    });
}