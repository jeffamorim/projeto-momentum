let primeiroNome = document.getElementById('materialRegisterFormFirstName');
let segundoNome = document.getElementById('materialRegisterFormLastName');
let email = document.getElementById('materialRegisterFormEmail');
let senha = document.getElementById('materialRegisterFormPassword');
let telefone = document.getElementById('materialRegisterFormPhone');


validarPrimeiroNome = () => {
    if (primeiroNome.value.length < 1 || primeiroNome.value.includes('.') || primeiroNome.value.includes('@')) {
        document.getElementById('alert-firstName').innerHTML = 'Comprimento inválido! É necessário informar no mínimo 1 caracter.'
        document.getElementById('alert-firstName').style.visibility = 'visible';

    }

    else {
        document.getElementById('alert-firstName').style.visibility = 'hidden';
    }
};

validarSegundoNome = () => {
    if (segundoNome.value.length < 1 || segundoNome.value.includes('.') || segundoNome.value.includes('@')) {
        document.getElementById('alert-secondName').innerHTML = 'Comprimento inválido! É necessário informar no mínimo 1 caracter.'
        document.getElementById('alert-secondName').style.visibility = 'visible';

    }

    else {
        document.getElementById('alert-secondName').style.visibility = 'hidden';
    }
};

validarEmail = () => {
    if (email.value.length < 1) {
        document.getElementById('alert-email').innerHTML = 'Comprimento inválido! É necessário informar no mínimo 1 caracter.'
        document.getElementById('alert-email').style.visibility = 'visible';

    }

    else {
        document.getElementById('alert-email').style.visibility = 'hidden';
    }
};

validarSenha = () => {
    if (!(senha.value.length >= 4)) {
        document.getElementById('alert-password').innerHTML = 'Comprimento inválido! É necessário informar no mínimo 4 caracteres.'
        document.getElementById('alert-password').style.visibility = 'visible';

    }

    else {
        document.getElementById('alert-password').style.visibility = 'hidden';
    }
};


document.getElementById('btnEnviar').addEventListener('click', () => {
    validarPrimeiroNome();
    validarSegundoNome();
    validarEmail();
    validarSenha();

    if (!(email.value.endsWith('.com')) && !(email.value.endsWith('.org')) && !(email.value.endsWith('.net')) && !(email.value.endsWith('.site')) && !(email.value.endsWith('.io'))) {
        document.getElementById('alert-email').innerHTML = 'É necessário informar uma terminação web válida, como .com, .org ou etc.'
        document.getElementById('alert-email').style.visibility = 'visible';

    }

    else {
        document.getElementById('alert-email').style.visibility = 'hidden';
    };
});