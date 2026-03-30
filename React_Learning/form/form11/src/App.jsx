import { useState } from "react"

function App(){
       const [issubmitted, setsubmited]= useState(false);

       const handlecheck=(e)=>{
        e.preventDefault();
        setsubmited(true);
       }

       if(issubmitted){
        return<>
        <div className="min-h-screen flex justify-center items-center bg-green-400">
           <h2 className="text-white text-2xl ">Form Submitted Successfully</h2>
          <button onClick={()=>{
            setsubmited(false);
           }}>click back</button>
        </div> 
        </>
       }





  return<>
  <div className="min-h-screen bg-amber-950 flex items-center justify-center">
    <div className="bg-white  rounded-2xl">
      <h2 className="text-black text-2xl text-center px-4 py-5  bg-amber-500">Contact Details</h2>

      <div className="p-5">
        <form onSubmit={
          handlecheck
        } action=" ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       <div className="flex flex-col">
             <label htmlFor="name">Enter the Name</label>
        <input type="text" id="name" placeholder="Enter the Name" required className="p-5 text-black text-xl  border-2 border-black" />
     
       </div>
       <div className="flex flex-col">
           <label htmlFor="sname">Enter the Second Name</label>
        <input type="text" id="sname" placeholder="Enter the Name" required className="p-5 text-black text-xl  border-2 border-black" />
       </div>
      </div>
        <div className=" flex flex-col ">
          <label htmlFor="">Enter the Email</label>
        <input type="text" id="" placeholder="Enter the email" required className="p-5 text-black text-xl  border-2 border-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Enter the Phone Number</label>
          <input type="phone" name="" placeholder="Enter the phone" required id="" className="p-5 text-black text-xl  border-2 border-black" />
        </div>
        <div className="flex flex-col" >
          <label htmlFor="">Enter the Message</label>
          <textarea name="" id="" placeholder="enter the MSG" required  className="p-5 text-black text-xl  border-2 border-black" ></textarea>
        </div>

        <div className="flex justify-center mt-5">
          
        <button  className="text-black text-2xl bg-green-400 px-22 py-1 rounded-2xl text-center" >Submit</button>
        </div>

        </form>
       
      </div>
             
      </div> 

  </div>
  </>
}

export default App