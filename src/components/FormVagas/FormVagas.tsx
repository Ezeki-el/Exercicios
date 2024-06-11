// FormVagas.tsx
import { useState } from 'react';
import { FormContainer } from './FormVagas.styles';

const FormVagas = ({ aoPesquisar }: { aoPesquisar: (termo: string) => void }) => {
  const [termo, setTermo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(event.target.value);
    aoPesquisar(event.target.value);
  };

  return (
    <FormContainer>
      <input type="text" value={termo} onChange={handleChange} placeholder="Pesquisar vagas" />
    </FormContainer>
  );
};

export default FormVagas;
