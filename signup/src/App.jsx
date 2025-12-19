// import  {remix}  from "@remixicon/react";

import { useState } from "react"


function App(){

  const[Action,setAction] = useState("SignUp");

  return (<>
  <div className="bg-blue-500 min-h-screen flex  items-center justify-center">
  <div className="bg-white px-4 rounded-2xl w-full max-w-md p-4">
    <div className="text-center text-2xl font-bold border-b-6   border-b-indigo-700">{Action}</div>
    <form action="" className="flex flex-col gap-4 p-4">
      {Action==="Login"?<div></div>:<div className="flex items-center gap-5 bg-gray-300 font-light text-2xl rounded-xl p-3">
           <i class="ri-user-line"></i> 
           <input type="text" placeholder="Name" className="outline-none w-full"/>
        </div>}
        
        <div className="flex items-center gap-5 bg-gray-300 font-medium  text-2xl rounded-xl p-3">
          <i class="ri-mail-line"></i> 
          <input type="text" placeholder="Email" className="outline-none w-full"/>
        </div>
           <div className="flex items-center gap-5 bg-gray-300 font-medium text-2xl rounded-xl p-3">
         <i class="ri-home-line"></i>
          <input type="text" placeholder="Address" className="outline-none"/>
        </div>
        <div className="flex items-center gap-5 bg-gray-300 font-medium  text-2xl rounded-xl p-3">
          <i class="ri-lock-line"></i>
          <input type="password" placeholder="Password" className="outline-none" />
        </div>
        {Action === "SignUp"?<div></div>:<div className="flex gap-2">
          Last Password
          <a href="" className="text-blue-800">Click Here?</a>
        </div>}
        
          <div className="flex gap-4">
            {/* bg-gray-100 rounded text-black pt-1 pb-1 pl-8 pr-8 hover:bg-gray-300 text-xl rounded-2xl */}
            <button className={Action==="SignUp"?"submit-gray":"submit"} onClick={(e)=>{
              e.preventDefault()
              setAction("SignUp")
            }}>SignUp</button>
            <button className={Action==="Login"?"submit-gray":"submit"}  onClick={(e)=>{
              e.preventDefault()
              setAction("Login")
            }}
            >Login</button>
          </div>
       
    </form>
   
  </div>
  </div>
 </>
  )
}


export default App