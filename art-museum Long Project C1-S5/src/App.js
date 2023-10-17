import harvardArt from "./data/hardvardArt";
import GalleryNavigation from "./components/GalleryNavigation/index";


function App() {
  return (

    <GalleryNavigation galleries={harvardArt.records}/>
  );
}

export default App;
