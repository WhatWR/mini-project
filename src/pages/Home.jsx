import React, { useEffect, useState } from 'react'
import AlertLight from '../components/AlertLight';
import Card from '../components/Card';
import axios from 'axios';
import ConvertTime from '../service/ConvertTime'
import ConvertTimeDate from '../service/ConverTimeDate'

const Home = () => {
    const [rooms, setRoom] = useState([]);
    const getData = async () => {
        const response = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed09/api/status/`)
        const temp = response.data.rooms
        for (let index = 0; index < temp.length; index++) {
            temp[index].averageTime = ConvertTime(temp[index].averageTime)
            temp[index].diffTime = ConvertTime(temp[index].diffTime)
            temp[index].startTime = ConvertTimeDate(temp[index].startTime)
        }
        setRoom(temp)
        console.log(ConvertTimeDate('2022-02-12T09:16:21.623000'));


    }
    
    



    useEffect(() => {
        const interval = setInterval(() => {
            getData()
        }, 1000)

        return () => clearInterval(interval)
    }, )

    return (

        <div className="App">
            <div className="heading">
                <h1 className='title'>Toilet Status</h1>
            </div>
            <div className="content">
                {rooms.map((room) => (
                    <div className="">
                        <AlertLight
                            status={room.status}
                        />
                        <Card
                            roomNumber = {room.roomNumber}
                            status = {room.status}
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