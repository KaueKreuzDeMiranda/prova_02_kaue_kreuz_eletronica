function consumoMensal(){
    let aparelho = prompt("Insira o nome do seu aparelho:");
    let opcao = parseInt(prompt("Medida de potência do seu aparelho:\n1 - Watt\n2 - Quilowatt"));
    let potenciaAparelho, tarifaDeEnergia, tempo, consumoMensal, valor;

    if(opcao == 1){
        potenciaAparelho = parseFloat(prompt("Insira a potência do seu aparelho em Watt:"));
        tarifaDeEnergia = parseFloat(prompt("Insira o valor da taxa de energia:"));
        tempo = parseFloat(prompt("Insira o tempo de uso diário do seu aparelho:"));
        consumoMensal = ((potenciaAparelho * tempo) / 1000) * 30;
        valor = consumoMensal * tarifaDeEnergia;
        console.log("Aparelho: " , aparelho , "\nConsumo mensal: " , consumoMensal.toFixed(2) , "kWh" , "\nValor mensal: R$" , valor.toFixed(2));
    }else if(opcao == 2){
        potenciaAparelho = parseFloat(prompt("Insira a potência do seu aparelho em Quilowatt:"));
        tarifaDeEnergia = parseFloat(prompt("Insira o valor da taxa de energia:"));
        tempo = parseFloat(prompt("Insira o tempo de uso diário do seu aparelho:"));
        consumoMensal = (potenciaAparelho * tempo) * 30;
        valor = consumoMensal * tarifaDeEnergia;
        console.log("Aparelho: " , aparelho , "\nConsumo mensal: " , consumoMensal.toFixed(2) , "kWh" , "\nValor mensal: R$" , valor.toFixed(2));
    }else{
        console.log("Opção inválida!");
    }
}