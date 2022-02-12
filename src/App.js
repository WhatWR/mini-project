import logo from './logo.svg'
import './App.css'
import Card from './components/Card'
import AlertLight from './components/AlertLight'

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>ห้องน้ำ</h1>
      </div>
      <div className="content">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
