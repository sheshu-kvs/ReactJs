import { Link, Outlet } from "react-router-dom"

function Product(){
    return<> 
    <h2>Product Page</h2>
    <div className="flex justify-center items-center gap-10 py-8 text-xl font-semibold">
         <Link to="/product/men">Men</Link>
         <Link to="/product/women">Women</Link>
    </div>
    <Outlet />

    </>
}

export default Product