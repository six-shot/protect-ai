import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./modules/sections/hero";
import Features from "./modules/sections/features";
import Scam from "./modules/sections/scam";

function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <Hero/>
      <Features/>
      <Scam/>
    </div>
  );
}

export default App;
