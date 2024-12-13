import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./modules/sections/hero";
import Features from "./modules/sections/features";
import Scam from "./modules/sections/scam";
import Portfolio from "./modules/sections/portfolio";

function App() {
  
  return (
    <div className="w-full ">
      <Navbar />
      <Hero/>
      <Features/>
      <Scam/>
      <Portfolio/>
    </div>
  );
}

export default App;
