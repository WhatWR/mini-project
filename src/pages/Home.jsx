import React, { useEffect, useState } from 'react'
import AlertLight from '../components/AlertLight';
import Card from '../components/Card';
import axios from 'axios';
import data from '../dummy'

const Home = () => {
    const [rooms, setRoom] = useState([]);
    // const getData = async () => {
    //     const response = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed09/api/status/`)
    //     setRoom(response.data.rooms)
    //     console.log(rooms);
   
    // }
    const getData = () => {
        setRoom(data.rooms)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getData()
        }, 3000)
        
        return () => clearInterval(interval)
    }, )

    return (

        <div className="App">
            <div className="heading">
                <h1>ห้องน้ำ</h1>
            </div>
            <div className="content">
                {rooms.map((room) => (
                    <div className="">
                        <AlertLight
                            status={room.status}
                        />
                        <Card
                            startTime={room.startTime}
                            averageTime={room.averageTime}
                            diffTime={room.diffTime}
                        />

                    </div>

                ))}

            </div>
        </div>
    )
}
export default Home