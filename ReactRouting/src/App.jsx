import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Nav from "./Nav/Nav"

function App(){
  return <>
   <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  </>
}


export default App
