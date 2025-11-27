import { useEffect, useState } from "react";

function App(){

  const[num ,setNum] =useState(0);
  const[num2 ,setNum2] =useState(10);

  // function a(){
  //   console.log("a is Running");
  // }

  // function b(){
  //   console.log("b is Running");
  // }


  // it will run at the time of rendering only one time
  // it will execute when the num is clicked only 
  useEffect(()=>{
    console.log("Use Effect Is Running...");
  },[num])
  // in this when i click the num button only then the useEffect will run

return(
  <div>
    <h2>Num 1 Value {num}</h2>
    <h2>Num 2 Value {num2}</h2>
    {/* <button onClick={()=>{
      setNum(num+1)
    }}>Num 1 </button> */}


        {/* <button onClick={()=>{
      setNum2(num2+10)
    }}>Num 2</button> */}


{/* It will run when the mouseEnter in the btn */}
   <button onMouseEnter={()=>{
      setNum(num+1)
    }}>Num 1 </button>

    <button onMouseLeave={()=>{
      setNum2(num2+10)
    }}>Num 2</button>

  </div>
)
}
export default App