import styled from 'styled-components'

const Cabecalho = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Header = () => (
  <Cabecalho>
    <h1>EBAC Jobs</h1>
  </Cabecalho>
)

export default Header
