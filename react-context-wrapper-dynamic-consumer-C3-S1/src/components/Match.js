import {  useState, useContext } from 'react';
import {HoroscopeContext} from "../context/HoroscopeContext"

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);

  return (
    <div>
      <button onClick={()=> setMatch(!match)}>Toggle Match</button>
      {match && <div>{sign.match}</div>}
    </div>
  );
};

export default Match;

