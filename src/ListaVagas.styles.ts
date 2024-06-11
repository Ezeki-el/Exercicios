import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
`

export const VagasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
