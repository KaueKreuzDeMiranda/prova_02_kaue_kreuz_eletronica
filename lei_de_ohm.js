function leiDeOhm(){
    let opcaoLeiDeOhm = parseInt(prompt("O que deseja calcular?\n1 - voltagem\n2 - Corrente\n3 - Resistência"));
    let voltagem, corrente, resistencia

    switch(opcaoLeiDeOhm){
        case 1:
            corrente = parseFloat(prompt("Insira a corrente em Ampères:"));
            resistencia = parseFloat(prompt("Insira a resistência em Ohms:"));

            voltagem = corrente * resistencia;

            console.log("A voltagem é: " , voltagem);
            break;
        case 2:
            voltagem = parseFloat(prompt("Insira a voltagem em Volts:"));
            resistencia = parseFloat(prompt("Insira a resistência em Ohms:"));

            corrente = voltagem / resistencia;

            console.log("A corrente é: " , corrente);
            break;
        case 3:
            voltagem = parseFloat(prompt("Insira a voltagem em Volts:"));
            corrente = parseFloat(prompt("Insira a corrente em Ampères:"));

            resistencia = voltagem / corrente;

            console.log("A resistência é: " , resistencia);
            break;
        default:
            console.log("Opção inválida!");
    }
}