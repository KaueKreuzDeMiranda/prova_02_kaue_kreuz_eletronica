function conversao(){
    let grandeza = prompt("Qual grandeza será convertida?");
    let valor = parseFloat(prompt("Qual será o valor a ser convertido?"));
    let partida = parseInt(prompt("Qual é o prefixo de partida?\n1 - Giga\n2 - Mega\n3 - Quilo\n4 - Hecto\n5 - Deca\n6 - Base\n7 - Deci\n8 - Centi\n9 - Mili\n10 - Micro\n11 - Nano"));
    let chegada = parseInt(prompt("Qual é o prefixo do resultado?\n1 - Giga\n2 - Mega\n3 - Quilo\n4 - Hecto\n5 - Deca\n6 - Base\n7 - Deci\n8 - Centi\n9 - Mili\n10 - Micro\n11 - Nano"));

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
    }
}