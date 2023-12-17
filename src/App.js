// import logo from "./logo.svg";
import "./App.css";

import Nav from "../src/components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import OurBlends from "./components/OurBlends/OurBlends";
import Excellence from "./components/Excellence/Excellence";
import ProductionCarousel from "./components/ProductionCarousel/ProductionCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <Nav />
      </header>
      <div className="AppBody">
        <Hero />
        <Quote />
        <OurBlends />
        <Excellence />
        <ProductionCarousel />
      </div>
      <div className="AppFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
