import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Hygrometer() {
  const {humidity, setHumidity} = useClimate();
  const [desiredHumidity, setDesiredHumidity] = useState(humidity);

  useEffect(() => {
    let timer;
    if(humidity !== desiredHumidity) {
      const rate = 2;
      timer = setTimeout(()=> {
        if (humidity < desiredHumidity) {
          setHumidity(humidity + rate);
        } else {
          setHumidity(humidity - rate);
        }
      }, 1000)
      return () => clearTimeout(timer)
    }

  },[humidity, desiredHumidity, setHumidity])
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHumidity}
        onAfterChange={(val) => {setDesiredHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
