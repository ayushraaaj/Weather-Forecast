import { useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import { useWeather } from './Context/Weather';

function App() {
  const Weather = useWeather();

  useEffect(() => {
    Weather.fetchWeatherForCurrentLocation();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button click={Weather.fetchWeatherData} name={'Search'} />
      <Card />
      {/* <Button name={'Refresh'} /> */}
    </div>
  );
}

export default App;
