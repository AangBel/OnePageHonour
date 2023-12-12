import logo from "./logo.svg";
import "./App.css";

import Nav from "../src/components/Nav/Nav";
import Hero from "./components/Hero/Hero";
// import "../public/Fonts/FontAwesome5BrandsRegular.ttf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
        
      </header>
    </div>
  );
}

export default App;
