import { Route, Routes } from "react-router-dom"
import Nav from "./Nav/Nav"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import View from "./Pages/View"
import About from "./Pages/About"

function App(){
  return<>
  <Nav />
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/view" element={<View />}></Route>
  </Routes>
  </>
}

export default App