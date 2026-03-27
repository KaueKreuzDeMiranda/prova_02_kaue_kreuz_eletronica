function conversao(){
    let grandeza = prompt("Qual grandeza será convertida?");
    let valor = parseFloat(prompt("Qual será o valor a ser convertido?"));
    let partida = parseInt(prompt("Qual é o prefixo de partida?\n1 - Giga\n2 - Mega\n3 - Quilo\n4 - Hecto\n5 - Deca\n6 - Base\n7 - Deci\n8 - Centi\n9 - Mili\n10 - Micro\n11 - Nano"));
    let chegada = parseInt(prompt("Qual é o prefixo do resultado?\n1 - Giga\n2 - Mega\n3 - Quilo\n4 - Hecto\n5 - Deca\n6 - Base\n7 - Deci\n8 - Centi\n9 - Mili\n10 - Micro\n11 - Nano"));
    let resultado, grandezaFinal;

    if(partida == 1){
        partida = 1e9;
    }else if(partida == 2){
        partida = 1e6;
    }else if(partida == 3){
        partida = 1e3;
    }else if(partida == 4){
        partida = 1e2;
    }else if(partida == 5){
        partida = 1e1;
    }else if(partida == 6){
        partida = 1;
    }else if(partida == 7){
        partida = 1e-1;
    }else if(partida == 8){
        partida = 1e-2;
    }else if(partida == 9){
        partida = 1e-3;
    }else if(partida == 10){
        partida = 1e-6;
    }else if(partida == 11){
        partida = 1e-9;
    }else{
        console.log("Opção inválida!");
    }

    if(chegada == 1){
        chegada = 1e9;
        grandezaFinal = "Giga" + grandeza;
    }else if(chegada == 2){
        chegada = 1e6;
        grandezaFinal = "Mega" + grandeza;
    }else if(chegada == 3){
        chegada = 1e3;
        grandezaFinal = "Quilo" + grandeza;
    }else if(chegada == 4){
        chegada = 1e2;
        grandezaFinal = "Hecto" + grandeza;
    }else if(chegada == 5){
        chegada = 1e1;
        grandezaFinal = "Deca" + grandeza;
    }else if(chegada == 6){
        chegada = 1;
        grandezaFinal = grandeza;
    }else if(chegada == 7){
        chegada = 1e-1;
        grandezaFinal = "Deci" + grandeza;
    }else if(chegada == 8){
        chegada = 1e-2;
        grandezaFinal = "Centi" + grandeza;
    }else if(chegada == 9){
        chegada = 1e-3;
        grandezaFinal = "Mili" + grandeza;
    }else if(chegada == 10){
        chegada = 1e-6;
        grandezaFinal = "Micro" + grandeza;
    }else if(chegada == 11){
        chegada = 1e-9;
        grandezaFinal = "Nano" + grandeza;
    }else{
        console.log("Opção inválida!");
    }

    resultado = valor * (partida / chegada);

    console.log("O resultado da conversão é: " , resultado , grandezaFinal);
}