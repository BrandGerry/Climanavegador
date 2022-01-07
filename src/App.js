//HOOKS
import React,{useEffect, useState} from "react"

//AXIOS
import axios from "axios"

//COMPONENTS
import Weather from "./Componentes/Weather"

//STYLES
import "./App.css"

function App() {
  //state
  const [data,setdata] = useState (null)

  //Error
  const error = () =>{
    console.log("No se accede a la ubicacion")
  }

  useEffect(() =>{
    const clave = position =>{
      const latitud = position.coords.latitude
      const longitud = position.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=07784c7a91f79a4a9d0fcda0c88a3e78`)
      .then(result => setdata(result.data))
    }
    navigator.geolocation.getCurrentPosition(clave,error)
  },[])

  const Tempe = data?.main?.temp
  const KoC = Tempe - 273.15
  const CoF = (KoC * 1.8) + 32

  const msForkh = (data?.wind?.speed) * 3.6

  return (
    <div className={KoC >= 13?  "sunny App" : KoC>=4?  "cloudy App" : KoC<=3? "cold App": null}>
      
      {
        data? (<>
            <h1>Weather App</h1>
            <Weather
            name={data?.name}
            city={data?.sys?.country}
            celcius={KoC.toFixed(2)}
            fahr={CoF.toFixed(2)}
            icon={data?.weather[0]?.icon}
            descr={data?.weather[0]?.description}
            pressure={data?.main?.pressure}
            humidity={data?.main?.humidity}
            speed={msForkh.toFixed(2)}
            />
        </> ) :
        ( 
          <section className='container-loader' >
            <div className='loader' ></div>
          </section>
        )
      }
    </div>
  )
}

export default App

