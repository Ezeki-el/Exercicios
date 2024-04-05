    import React, { useState } from 'react';

    const Formulario = ({ calcularIMC }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularIMC(parseFloat(altura), parseFloat(peso));
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Altura (m):
            <input type="number" step="0.01" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </label>
        <label>
            Peso (kg):
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
        <button type="submit">Calcular IMC</button>
        </form>
    );
    };

    export default Formulario;
