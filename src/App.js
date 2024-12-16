import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./modules/sections/hero";
import Features from "./modules/sections/features";
import Scam from "./modules/sections/scam";
import Portfolio from "./modules/sections/portfolio";
import UseCase from "./modules/sections/use";
import News from "./modules/sections/news";
import GetInTouch from "./modules/sections/getintouch";

function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <Hero />
      <Features />
      <Scam />
      <Portfolio />
      <UseCase />
      <News />
      <GetInTouch/>
    </div>
  );
}

export default App;
