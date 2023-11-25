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


    const apiKey = "0890c0e9739f075f5dca132d9ee4c344"; // Replace with your actual API key
    // const city = 'CITY_NAME'; // Replace with the desired city name
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    // const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=new york`;
    // const apiUrl = true


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
                               className="mySelect"
                               value={city}
                               onChange={(e) => setCity(e.target.value)}
                               type="text"/>
                    </div>
                    <button style={{
                        width: '37%',
                        height: "30px",
                        backgroundColor: "#5c616e",
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