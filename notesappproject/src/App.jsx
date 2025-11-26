import { useState } from "react";

function App(){
  // Declarig the Props 
  // first I/p
  const[title,setTitle]=useState('')
  // Second Ip
  const[details,setDetails]=useState('')
  
  // Stroing this values in the array..
  const[task,setTask]=useState([])
  

  function getData(e){
    e.preventDefault();
    // console.log(title);
    // console.log(details);
    // we are stroing the values in the task created object
    // we are creating the copy  becasuse this values  
    const copyTask = [...task];
    copyTask.push({title,details});
   

    // HERE PREVOIUS DATA WILL REPLACE WITH THE ORIGINAL
    // previous will also there and original value also there
     setTask(copyTask)
     console.log(copyTask);


    
    setTitle('')
    setDetails('')
  }

  function deleteNote(idx){
   const copyTask =  [...task]
    copyTask.splice(idx,1);
    console.log(copyTask)
    setTask(copyTask)
  }
  return(
    <>
    <div className="bg-black h-screen lg:flex  ">
       <form onSubmit={(e)=>{ 
        getData(e)
        }
        }  className="flex flex-col lg:w-1/2 gap-5  py-5 px-3 ">
       <h2 className=" text-white text-center text-4xl ">Add a Note</h2>
      <input className="rounded text-white border-3 px-5 py-7 font-medium text-2xl border-b-blue-50 outline-none " type="text"  placeholder="Enter The Name"
      value={title} onChange={(e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value)

      }}/>
      <textarea className="rounded text-white border-3 h-50 text-2xl   border-b-blue-50 outline-none  " placeholder="Write a Message"
      value={details} onChange={(e)=>{
        setDetails(e.target.value)
      }}></textarea>
      <button className="rounded outline-none py-3 bg-white text-black text-2xl  ">Add Note</button>
    </form>


    <div className=" flex  flex-col gap-5 lg:w-1/2 flex-wrap p-10 border-4 lg:border-l-white">
      <h2 className="text-white text-4xl ">Recent Notes</h2>
        <div className="flex flex-wrap items-start gap-4 overflow-auto">
        {task.map((e,idx)=>{
          return <div key={idx} className="h-54 flex flex-col justify-between   rounded-2xl w-42  bg-cover bg-[url('https://i.pinimg.com/1200x/84/7f/2c/847f2ccfd6708d01928af1bb886c47f5.jpg')] "> 
          <div className="p-2">
            <h2 className=" font-bold text-2xl">{e.title}</h2>
           <p className="font-medium bg-gray-300 text-center  mt-1 ">{e.details}</p>
          </div>

          <div className="">
            <button onClick={(idx) =>{
               deleteNote(idx);
            }} className="bg-red-500 py-1 w-full mb-2 text-black  rounded">Delete</button></div>

           </div>
        })}
      </div>
    </div>
    </div>
    
    </>
  )
}


export default App 