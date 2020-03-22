var campoNome = document.getElementById('inputNomeContato');
var camporEmail = document.getElementById('inputEmailContato');
var campoMensagem = document.getElementById('inputMensagemContato');
var frmContato = document.getElementById('frmContato');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAWrYCj6C8NN8BI69ep_f92XBC1xLcIwPU",
    authDomain: "edicursos-8b558.firebaseapp.com",
    databaseURL: "https://edicursos-8b558.firebaseio.com",
    projectId: "edicursos-8b558",
    storageBucket: "edicursos-8b558.appspot.com",
    messagingSenderId: "1381193065"
};
firebase.initializeApp(config);

var database = firebase.database();

function enviarMensagem() {
    var newKey = firebase.database().ref().child('mensagens').push().key;
    var valorEmail = camporEmail.value;
    var valorMensagem = campoMensagem.value;
    var valorNome = campoNome.value;
    firebase.database().ref('mensagens/' + newKey).set({
        email: valorEmail,
        mensagem : valorMensagem,
        nome: valorNome
    });
    exibirMensagem('Obrigado por enviar sua mensagem ;)');
    limparCampos();
}

function exibirMensagem(mensagem) {
	var mensagemHTML = 
	'<div class="alert alert-primary" role="alert">' +
		mensagem +
    '</div>' +
    '<br/>';

	var mensagensContato = document.getElementById("mensagensContato");
	mensagensContato.innerHTML = mensagemHTML;
}

function limparCampos() {
    camporEmail.value = '';
    campoMensagem.value = '';
    campoNome.value = '';
}