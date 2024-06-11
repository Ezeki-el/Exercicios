import styled from 'styled-components'

export const AppContainer = styled.div`
  padding-bottom: 120px;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`