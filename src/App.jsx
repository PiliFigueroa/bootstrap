import './App.css'
import { Button } from 'react-bootstrap';
import { Navigation } from './components/Navigation'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Button variant="primary">Primary</Button>
    </div>
  )
}

export default App
