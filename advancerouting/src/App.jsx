import { Route, Routes, UNSAFE_WithComponentProps } from "react-router-dom"
import Nav from "./Nav/Nav"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import About from "./Pages/About"
import PageNotFound from "./Pages/PageNotFound"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Course from "./Pages/Course"
import CourseDetailPage from "./Pages/CourseDetailPage"
import Nav2 from "./Nav/Nav2"


function App(){
  return<>
  <Nav />
  <Nav2 />
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/product" element={<Product />}>
         <Route path="men" element={<Men /> }></Route>
          <Route path="women" element={<Women /> }></Route>
     </Route>
     <Route path="/course" element={<Course/>} ></Route>
     <Route path="/course/:java" element={<CourseDetailPage/>} ></Route>
    <Route path="*" element={<PageNotFound />}></Route>
  </Routes>
  </>
}

export default App