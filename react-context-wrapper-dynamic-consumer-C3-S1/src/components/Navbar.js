import horoscopesObj from "../data/horoscopes";
import { HoroscopeContext } from "../context/HoroscopeContext";
import { useContext } from "react";

const Navbar = () => {
  const { setCurrentSign } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopesObj);

  function handleClick(sign) {
    setCurrentSign(sign);
  }
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={() => handleClick(sign)}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
