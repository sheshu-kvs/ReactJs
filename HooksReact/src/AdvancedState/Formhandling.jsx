import { useState } from "react"

function Formhandling(){
    function getdata(e){
        e.preventDefault()
        console.log(e.target);
    }
    return(
          <>
          <form onSubmit={getdata} >
              <input type="text" placeholder="Enter the Name" />
          <button >Save</button>
          </form>
        
    </>

    )
  
}


export default Formhandling