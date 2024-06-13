interface Props {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos?: string[] // Make requisitos optional
}

const Vaga: React.FC<Props> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos // Add requisitos to destructuring
}) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{localizacao}</p>
      <p>{nivel}</p>
      <p>{modalidade}</p>
      <p>
        R$ {salarioMin} - R$ {salarioMax}
      </p>
      {requisitos && (
        <ul>
          {requisitos.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Vaga
