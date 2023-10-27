import { useCoffee } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { coffeeBeanId, setCoffeeBeanId } = useCoffee();

  const handleCoffeeBeanChange = (event) => {
    const selectedId = event.target.value;
    setCoffeeBeanId(selectedId);
  };

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBeanId}
        onChange={handleCoffeeBeanChange}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
