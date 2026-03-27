function reqResistores(){
    let escolha = parseInt(prompt("Como está o seu circuito?\n1 - Em série\n2 - Em paralelo"));
    let qntResistores = parseInt(prompt("Quantos resistores tem seu circuito?"));
    let soma = 0, resistencia;

    switch(escolha){
        case 1:
            for(let rResistor = 0; rResistor < qntResistores; rResistor++){
                resistencia = parseFloat(prompt("Insira a resistência em Ohms do seu " + (rResistor + 1) + "º resistor:"));
                soma += resistencia;
            }
            console.log("Resistência equivalente: " , soma , " Ohms");
            break;
        case 2:
            for(let rResistor = 0; rResistor < qntResistores; rResistor++){
                resistencia = parseFloat(prompt("Insira a resistência em Ohms do seu " + (rResistor + 1) + "º resistor:"));
                soma += 1 / resistencia;
            }
            console.log("Resistência equivalente: " , (1 / soma).toFixed(2) , " Ohms");
            break;
        default:
            console.log("Opção inválida!");
    }
}