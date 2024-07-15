import styled from 'styled-components'
import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

const VagasGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const vagas: any[] = [
  // ... your vagas array
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
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
            requisitos={vag.requisitos}
          />
        ))}
      </VagasGrid>
    </Container>
  )
}

export default ListaVagas
