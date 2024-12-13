import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./modules/sections/hero";

function App() {
  return (
    <div className="w-full h-screen bg-[#2e21de]">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
