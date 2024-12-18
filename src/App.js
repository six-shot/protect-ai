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
import Footer from "./modules/sections/footer";
import SiteWrapper from "./components/SiteWrapper";

function App() {
  return (
    <SiteWrapper>
      <div className="w-full">
        <Navbar />
        <div >
          <Hero />
        </div>
        <div >
          <Features />
        </div>
        <div >
          <Scam />
        </div>
        <div >
          <Portfolio />
        </div>
        <div >
          <UseCase />
        </div>
        <div >
          <News />
        </div>
        <GetInTouch />
        <Footer />
      </div>
    </SiteWrapper>
  );
}

export default App;
