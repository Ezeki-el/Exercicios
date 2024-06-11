
import { VagaContainer } from './Vaga.styles';

interface VagaProps {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
}

const Vaga = ({ titulo, localizacao, nivel, modalidade, salarioMin, salarioMax, requisitos }: VagaProps) => {
  return (
    <VagaContainer>
      {/* Conteúdo da vaga */}
    </VagaContainer>
  );
};

export default Vaga;
