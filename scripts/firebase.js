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
function salvarMensagem() {
    var newKey = firebase.database().ref().child('mensagens').push().key;
    var valorNome = document.getElementById('inputNome').value;
    var valorEmail = document.getElementById('inputEmail').value;;
    var valorMensagem = document.getElementById('inputMensagem').value;;
    firebase.database().ref('mensagens/' + newKey).set({
        nome: valorNome,
        email: valorEmail,
        mensagem : valorMensagem
    });
}