window.onload = initialize;

var formLogin;

function initialize() {
    formLogin = document.getElementById('form_login');
    formLogin.addEventListener('submit', authentication, false);
}

function authentication(e) {
    e.preventDefault();

    var user     = e.target.email.value,
        password = e.target.password.value;

    firebase.auth().signInWithEmailAndPassword(user, password)
        .then(function(result){
            window.location.href = '../../intranet/customer/list.html';
        })
        .catch(function(error) {
            console.log('No se autentifico');
        });
}
