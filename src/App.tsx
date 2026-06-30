import './App.scss'
import { FocusAreas } from './components/FocusAreas/FocusAreas'
import { ImpactStats } from './components/ImpactStats/ImpactStats'
import { TaleedFooter } from './components/Footer/TaleedFooter'

function App() {
  return (
    <>
          <ImpactStats />
      <FocusAreas />
      <TaleedFooter />
    </>
  )
}

export default App
