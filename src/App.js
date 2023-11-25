import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {

    const [city, setCity] = useState([]);
    const [Temp, setTemperature] = useState()
    const [winspeed, setwinspeed] = useState()
    const [humidity, sethumidity] = useState()
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [Results, setResults] = useState([])


    const apiKey = "0773c88dfdb9ebe4a4be74fe4c1c4ded";
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    // const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;


    useEffect(() => {
            // setisLoading(true)
            const getWeatherData = async () => {
                try {
                    const response = await axios.get(apiUrl);
                    const weatherData = response.data;
                    setResults(weatherData)


                    // Process the weather data as needed
                    console.log(weatherData);
                    console.log('Temperature:', weatherData.current.temperature);
                    setTemperature(weatherData.current.temperature)
                    console.log('Weather Description:', weatherData.current.wind_speed);
                    setwinspeed(weatherData.current.wind_speed)
                    console.log('Weather Description:', weatherData.current.humidity);
                    sethumidity(weatherData.current.humidity)
                } catch (error) {
                    console.error('Error fetching weather data:', error.message);
                }
            };

            getWeatherData();

        setFormSubmitted(false);
        }, [formSubmitted, apiUrl]

    )

    const handleSubmit = (e) => {
        e.preventDefault();
        // Set formSubmitted to true when the form is submitted
        setFormSubmitted(true);
    };

    return (
        <div className="App">
            <h1>Weather Application</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="select">
                        <label className="label" htmlFor="question">Select the City of your Choice</label>
                        <input id="question"
                               style={{
                                   backgroundColor: "darkgrey",
                                   margin: "10px 5px",
                                   borderRadius: "5px",
                                   padding: "15px 30px",
                                   outline: "none",
                                   border:"none",
                                   marginLeft:"20px",
                                   fontSize: "14px",
                                   boxShadow: "rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px"
                               }}
                               value={city}
                               onChange={(e) => setCity(e.target.value)}
                               type="text"/>
                    </div>
                    <button style={{
                        width: '37%',
                        height: "30px",
                        outline: "none",
                        border:"none",
                        backgroundColor: "blue",
                        borderRadius: "5px",
                        marginBottom: "40px"
                    }}>submit
                    </button>
                </form>
            </div>

            <div>
                <p>Results for {city}</p>
                <p>Temperature of the city : {Temp}</p>
                <p>Humidity of the city : {humidity}</p>
                <p>Wind Speed of the city : {winspeed}</p>

            </div>

        </div>
    );

}
export default App;