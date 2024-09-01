import Home from "./components/Home"
import NavBar from "./components/NavBar";
import SocialLinks from './components/SocialLinks';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks />
    <SpeedInsights />
   </div>
  );
}

export default App;
