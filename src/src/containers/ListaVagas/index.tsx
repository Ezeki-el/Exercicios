// src/containers/ListaVagas/index.tsx
import styled from 'styled-components'
import Vaga from '../../components/Vaga'

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`

const ListaVagas = () => (
  <Lista>
    <Vaga
      titulo="Desenvolvedor Front-end"
      localizacao="São Paulo"
      nivel="Pleno"
      modalidade="Remoto"
      salarioMin={5000}
      salarioMax={8000}
      requisitos={['React', 'JavaScript']}
    />
    {/* Adicione mais componentes Vaga conforme necessário */}
  </Lista>
)

export default ListaVagas
