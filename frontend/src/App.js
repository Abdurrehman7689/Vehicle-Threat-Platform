import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [vehicleData, setVehicleData] = useState({})
  const [alerts, setAlerts] = useState([])

  useEffect(() => {

    const interval = setInterval(() => {

      axios.get('http://127.0.0.1:5000/')

      .then(res => {

        setVehicleData(res.data.vehicle_data)
        setAlerts(res.data.alerts)

      })

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div style={{padding: '40px'}}>

      <h1>Vehicle Threat Dashboard</h1>

      <h2>Speed: {vehicleData.speed} km/h</h2>

      <h2>RPM: {vehicleData.rpm}</h2>

      <h2>Fuel Level: {vehicleData.fuel_level}%</h2>

      <h2>Engine Temp: {vehicleData.engine_temp}°C</h2>

      <h2>Battery Voltage: {vehicleData.battery_voltage}V</h2>

      <div>

        <h1>Alerts</h1>

        {alerts.map((alert, index) => (
          <p key={index}>{alert}</p>
        ))}

      </div>

    </div>
  )
}

export default App
