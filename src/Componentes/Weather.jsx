//HOOKS
import React, {useState, useEffect} from 'react'

//STYLES
import "../Styles/Weather.styles.css"

const Wheather = ({name, city, celcius, fahr,descr, pressure, humidity, speed, icon, }) => {

    const [ gradees, setGradees ] = useState(<p>{celcius}</p>);
    const [type, setType] = useState(true);
    
     useEffect(() => {
         switch (type) {
             case true:
                 setGradees(<p>{celcius}</p>)
                 break;
         
             default:
                 setGradees(<p>{fahr}</p>)
                 break;
         }
     }, [celcius, fahr, type])

     const handleFtoC = () => {
        setType(!type)
     }
    
     //
    
    return (
        <div className='card' >
            <section className='first-section' >
                <p>{name}, {city}</p>
            </section>
                
            <section className='second-section' >
                <article className='icon-weather' >

                    <div className='degrees' >
                        <div className='gradees-cf' >
                            {gradees}<h4>{type? "°C" : "°F"}</h4>
                        </div>
                    </div>
                    <div className='icon' >
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                    </div>
                </article>
                <article className='info-weather' >
                    <p><i className="fas fa-cloud"></i>"{descr}"</p>
                    <section className='details-container' >
                        <div className='details' >
                        <p>Details<i className="fas fa-temperature-low"></i></p>
                        <p>Pressure: {pressure} hPa</p>
                        <p><i className="fas fa-tint"></i>Humidity: {humidity}%</p>
                        <p><i className="fas fa-wind"></i>Wind: {speed} km/h </p>
                    </div>
                    </section>
                    
                </article>
            </section>

            <section className='three-section' >
                <button onClick={handleFtoC} >Degrees °F/°C</button>
            </section>
            
        </div>
    )
}

export default Wheather
