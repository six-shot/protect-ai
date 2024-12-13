import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./modules/sections/hero";
import Features from "./modules/sections/features";

function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;
