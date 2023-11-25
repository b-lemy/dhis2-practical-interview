import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {

  const [city, setCity] = useState([]);
  const [isLoading, setisLoading] = useState(true)


  const apiKey = '6bbb5532c56503f053ff95556a9b2c47'; // Replace with your actual API key
  // const city = 'CITY_NAME'; // Replace with the desired city name
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;


  useEffect(() => {
        setisLoading(true)
        const getWeatherData = async () => {
          try {
            const response = await axios.get(apiUrl);
            const weatherData = response.data;

            // Process the weather data as needed
            console.log(weatherData);
          } catch (error) {
            console.error('Error fetching weather data:', error.message);
          }
        };

        getWeatherData();
      }, []
  )

  return (
      <div className="App">
        <h1>Weather Application</h1>
        <form onSubmit={onsubmit} className="form">

          <div className="select">
            <label className="label" htmlFor="question">Select the City of your Choice</label>

            <input id="question"
                   className="mySelect"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   type="number"/>

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
  );

}
export default App;
