import { useState } from "react";
import axios from 'axios'

function App(){
  const[data,setData] = useState([])
  // async function  name(){
  //      let resp = await fetch('https://jsonplaceholder.typicode.com/todos')
  //      let data = await resp.json();
  //      setData(data);
  // }


  async function name(){
    let resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
     setData(resp.data)
  }
  // name();
  return (
    <div className="">
     <h2 onClick={name}  className=" p-5 text-white font-medium text-4xl text-center rounded-2xl bg-gray-900 w-sm mt-5 ml-5">Get Data</h2>
    <div className="p-10">
      {data.map((elem,idx)=>{
        return <h2 className="bg-black text-gray-100 p-10 text-4xl mt-4">{elem.title}, {idx}</h2>
      })}
    </div>
      

    </div>
  )
}

export default App