import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Thermometer() {
  const {temprature, setTemprature} = useClimate();
  const [desiredTemp, setDesiredTemp] = useState(temprature);

  useEffect(() => {
    let timer;
    if (temprature !== desiredTemp) {
      const rate = 1;

      timer = setTimeout(() => {
        if (temprature < desiredTemp) {
          setTemprature(temprature + rate)
        } else {
          setTemprature(temprature - rate)
        }
      },1000)

      return () => clearInterval(timer)

    }

  }, [temprature, desiredTemp, setTemprature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temprature}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={(val) => {setDesiredTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
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

export default Thermometer;
