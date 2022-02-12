import './App.css'
import Card from './components/Card'
import AlertLight from './components/AlertLight'
import { useState } from 'react';
import data from './dummy';

function App() {
  const [rooms, setRoom] = useState(data.rooms);
  return (
    
    <div className="App">
      <div className="heading">
        <h1 className='title'>Toilet Status</h1>
      </div>
      <div className="content">
        {rooms.map((room) => (
          <div className="">
            <AlertLight 
            status = {room.status}
            />
            <Card 
            averageTime = {room.averageTime}
            lastTime = {room.lastTime}
            />
            
          </div>

        ))}
        
      </div>
    </div>
  )
}

export default App

    