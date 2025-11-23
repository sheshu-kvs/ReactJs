import { useState } from "react"



function App(){

  const [num,setNum]=useState(10)

  function IncreaseNum(){
    setNum(num+1);
    }

   function DecreaseNum(){
    setNum(num-1);
   }
   function IncreseNumBy5(){
    setNum(num+5)
   }


  return (<>
   <div className="box">
    
    <button onClick={IncreaseNum}>Increase 1</button>
    <button onClick={DecreaseNum}>Decrease 1</button>
    <button onClick={IncreseNumBy5}>Increase Num By 5</button><br />  
    <div>
       <h1>Count : {num}</h1>
    </div>
   </div>
    </>
  )
}



export default App