import axios from "axios"
import { useState } from "react";



function App(){
  const[UserData,setUserData]=useState([]);
  async function getData(){
    let resp = await axios.get('https://picsum.photos/v2/list?page=2&limit=300');
    console.log(resp.data);
    setUserData(resp.data);
  }
  

  
  return (<>
  <button onClick={getData} className="bg-green-400 text-white px-2 py-2 ml-3 mt-5">Get Data</button>
  <div className="flex flex-wrap gap-5 p-5"> 
   {UserData.map((ele,idx)=>{
     return <div className="">
      <img key={idx} className="h-60 w-60 rounded-xl object-cover cursor-pointer" src={ele.download_url} alt=""  />
      <h2 className="font-medium text-2xl">{ele.author}</h2>
     </div>
   })}
  </div>
  </>
  )
}

export default App