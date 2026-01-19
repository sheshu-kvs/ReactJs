import { Link } from "react-router-dom"

function Nav(){
    return <>
   <div className="bg-cyan-700  text-white text-xl box-border">
     <div className="flex justify-between items-center px-4 py-6">
        <h2 className="text-3xl">Logo</h2>
        <div className="hidden md:flex lg:gap-10">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/contact">Contact</Link> */}

            <Link to="/product">Product</Link>
            <Link to="/course">Course</Link>
            
        </div>
        <button className="md:hidden">  <i className="ri-menu-line"></i></button>
        </div>
        <div className="fixed bottom-0 w-full py-6 bg-cyan-700 flex justify-center items-center text-white">
            <h2>Bootom</h2>
        </div>
    </div>
    </>
}

export default Nav