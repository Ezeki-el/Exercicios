import React, { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { Container, VagasGrid } from './ListaVagas.styles'

// Supondo que `vagas` seja um array de objetos de vaga
const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Front-end',
    localizacao: 'São Paulo',
    nivel: 'Junior',
    modalidade: 'Remoto',
    salarioMin: 3000,
    salarioMax: 5000
  },
  {
    id: 2,
    titulo: 'Designer Gráfico',
    localizacao: 'Rio de Janeiro',
    nivel: 'Pleno',
    modalidade: 'Presencial',
    salarioMin: 4000,
    salarioMax: 6000
  }
  // Adicione outras vagas conforme necessário
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro.toLocaleLowerCase()) >= 0
  )

  return (
    <Container>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasGrid>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
          />
        ))}
      </VagasGrid>
    </Container>
  )
}

export default ListaVagas
