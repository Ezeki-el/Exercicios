import './global.css'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { AppContainer, Container } from './App.styles'

function App() {
  return (
    <AppContainer>
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </AppContainer>
  )
}

export default App
