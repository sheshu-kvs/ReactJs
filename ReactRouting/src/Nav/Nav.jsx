import { Link } from "react-router"

function Nav(){
    return<>
      <div className="flex text-white text-2xl justify-between p-5 bg-amber-500">
    <h2>Sheshadri</h2>
    <div className="flex gap-8">
      <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/contact' >Contact</Link>
     {/* <h2 className="underline decoration-2 cursor-pointer"><Link to='/' >Home</Link></h2> */}
     
    </div>
  </div>
    </>
}


export default Nav