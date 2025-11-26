import { useState } from "react"

function AdvanceState(){
    const [num,setNum]=useState(10);
    function ChangeNum(){
        console.log(num+1)
        setNum(20)
        console.log(num)
    }
    return (
        <>
        <h2>{num}</h2>
        <button onClick={ChangeNum}>Click</button>
        </>
    )
}




export default AdvanceState