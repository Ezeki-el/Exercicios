import React from 'react';
import Formulario from './Formulario';
import calcularIMC from './CalculadoraIMC';

function App() {
  const handleCalcularIMC = (altura, peso) => {
    alert(calcularIMC(altura, peso));
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <Formulario calcularIMC={handleCalcularIMC} />
    </div>
  );
}

export default App;
