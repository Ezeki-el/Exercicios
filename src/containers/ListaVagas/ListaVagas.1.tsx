import React, { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { vagas } from './ListaVagas'

export const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (Vaga) =>
      Vaga.titulo.toLocaleLowerCase().search(filtro.toLocaleLowerCase()) >= 0
  )

  return <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />

  {
    vagasFiltradas.map((vag) => (
      <Vaga
        key={vag.id}
        titulo={vag.titulo}
        localizacao={vag.localizacao}
        nivel={vag.nivel}
        modalidade={vag.modalidade}
        salarioMin={vag.salarioMin}
        salarioMax={vag.salarioMax}
        requisitos={[]}
      />
    ))
  }
}
