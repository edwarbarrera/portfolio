import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio  from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Testimonials from "./components/testimonials/Testimonials"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu"
import Travail from "./components/travail/Travail"



function App() {

  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Travail/>
        <Contact/>
      </div>
   
    </div>
  );
}

export default App;