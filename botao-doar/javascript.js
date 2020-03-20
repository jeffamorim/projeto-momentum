
let escolha = document.getElementsByName('group1');
let resul = '';
let mensagem = document.querySelector('textarea');


document.getElementById("btnEnviar").addEventListener('click', () => {
    if (escolha[0].checked) {
        let resul0 = escolha[0];
        resul = resul0.value;
    };

    if (escolha[1].checked) {
        let resul1 = escolha[1];
        resul = resul1.value;
    };

    if (escolha[2].checked) {
        let resul2 = escolha[2];
        resul = resul2.value;
    };

    if (escolha[3].checked) {
        let resul3 = escolha[3];
        resul = resul3.value;
    };

    if (escolha[4].checked) {
        let resul4 = escolha[4];
        resul = resul4.value;
    };

    if (mensagem.length <= 0) {
        mensagem = '*campo vazio!*';
    }

    console.log(`A escolha foi: ${resul} e a mensagem deixada foi: ${mensagem.value}`);
});