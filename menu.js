let escolha = parseInt(prompt("Qual opção deseja realizar?\n1 - Consumo mensal\n2 - Conversão de unidades\n3 - Calculo de resistores\n4 - Lei de Ohm\n5 - Resistência equivalente"));

switch(escolha){
    case 1:
        consumoMensal();
        break;
    case 2:
        conversao();
        break;
    case 3:
        resistores();
        break;
    case 4:
        leiDeOhm();
        break;
    case 5:
        reqResistores();
        break;
    default:
        console.log("Opção inválida!");
}