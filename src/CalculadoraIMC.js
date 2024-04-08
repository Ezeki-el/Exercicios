    const calcularIMC = (altura, peso) => {
        const imc = peso / (altura * altura);
    
        if (isNaN(imc)) {
        return 'Por favor, insira valores válidos.';
        }
    
        let classificacao = '';
        if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
        classificacao = 'Peso normal';
        } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        } else if (imc < 34.9) {
        classificacao = 'Obesidade grau 1';
        } else if (imc < 39.9) {
        classificacao = 'Obesidade grau 2';
        } else {
        classificacao = 'Obesidade grau 3';
        }
    
        return `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    };
    
    export default calcularIMC;
    