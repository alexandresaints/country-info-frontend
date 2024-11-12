import { CountryProvider } from './context/Country'
import { Routers } from './routers/router'

function App() {
  return (
    <CountryProvider>
      <Routers />
    </CountryProvider>
  )
}

export default App
