import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';


function ClimateStats() {
  const {temprature, humidity} = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temprature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
