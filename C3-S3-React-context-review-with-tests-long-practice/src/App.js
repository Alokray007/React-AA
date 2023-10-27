import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import CoffeeProvider from "./context/CoffeeContext";
import SetCoffeeBean from "./components/SetCoffeeBean";


function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
      <CoffeeProvider>
        <SelectedCoffeeBean />
        <SetCoffeeBean coffeeBeans={coffeeBeans}/>
      </CoffeeProvider>
    </>
  );
}

export default App;
