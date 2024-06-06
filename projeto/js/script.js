var sorte = Math.floor(Math.random() * 10) + 1;
var tentativas = 2;

function myFunction() {
    var chute = parseInt(document.querySelector(".chute").value);

    if (chute > 10 || chute < 1 || isNaN(chute)) {
        document.getElementById("ajuda").innerHTML = "Por favor, digite um número entre 1 e 10!";
        document.getElementById("frase").innerHTML = "ASTRO diz: 'Você digitou um número inválido! Tente novamente, por favor!'";
        return;
    }

    if (chute === sorte) {
        document.getElementById("enviar").setAttribute('disabled', true);
        document.getElementById("enviar").style.backgroundColor = "gray";
        document.getElementById("reiniciar").removeAttribute('disabled');
        document.getElementById("reiniciar").style.backgroundColor = "#333333";
        document.getElementById("ajuda").innerHTML = "Parabéns, você ganhou!";
        document.getElementById("ajuda").style.fontSize = "30px";
        document.getElementById("frase").innerHTML = "ASTRO diz: 'Parabéns, você acertou!'";
        document.getElementById("astro").src = "img/astro.png"
        document.getElementById("astro").style.width = "100%";
        document.getElementsById("projeto").style.height = "80%";
        return;
    } else {
        tentativas--;
        if (tentativas > 0) {
            document.getElementById("ajuda").innerHTML = "Você errou! Tente novamente, você ainda tem " + tentativas + " tentativas!";
            document.getElementById("frase").innerHTML = "ASTRO diz: " + (chute > sorte ? "'O número é menor!'" : "'O número é maior!'");
            document.getElementById("astro").src = "img/corre.png"
            document.getElementById("astro").style.width = "110%";
            document.getElementsById("projeto").style.height = "80%";
        } else {
            document.getElementById("enviar").setAttribute('disabled', true);
            document.getElementById("enviar").style.backgroundColor = "gray";
            document.getElementById("reiniciar").removeAttribute('disabled');
            document.getElementById("reiniciar").style.backgroundColor = "#333333";
            document.getElementById("ajuda").innerHTML = "Suas tentativas acabaram! A resposta correta era: " + sorte + ". <br> Reinicie a página no botão abaixo!"
            document.getElementById("frase").innerHTML = "ASTRO diz: 'Infelizmente você perdeu! O número era " + sorte + "'";
            document.getElementById("astro").src = "img/tentativa.png";
            document.getElementById("astro").style.width = "100%";
            document.getElementsById("projeto").style.height = "80%";
        }
    }
}

function reiniciarJogo() {
    sorte = Math.floor(Math.random() * 10) + 1;
    document.querySelector(".chute").value = "";
    tentativas = 2;
    document.getElementById("ajuda").innerHTML = "Digite um número entre 1 e 10!";
    document.getElementById("frase").innerHTML = "ASTRO diz: 'Vamos começar a jogar?'";
    document.getElementById("astro").src = "img/nen.png";
    document.getElementById("astro").style.width = "50%";
    document.getElementById("enviar").removeAttribute('disabled');
    document.getElementById("reiniciar").setAttribute('disabled', true);
    document.getElementById("reiniciar").style.backgroundColor = "gray";
    document.getElementById("enviar").style.backgroundColor = "#333333";
}