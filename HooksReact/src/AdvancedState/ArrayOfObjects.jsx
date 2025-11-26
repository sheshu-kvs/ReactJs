import { useState } from "react";

function ArrayOfObjects(){
    /*
    *
       const[val,setNum]=useState({user:"aiter",age:20})
    function getData(){
        const newNum = {...val};
        // setNum(newNum)
        newNum.user ='lohit';
        newNum.age=120
        setNum(newNum)
        console.log(newNum)
    }


    */
   /*Array of the Data*/
//    const[data,setNum] = useState([10,20,30,40])
    const[val,setNum] = useState({user:"deva",age:35});

    function getArray(){
    // let arrayofdata =  [...data];
    // arrayofdata.push(303);
    // arrayofdata[0] =100
    // setNum(arrayofdata)

    let newval =(prev=>({...val,age:50 }));
    setNum(newval);

   }
 
    
    return(
        <>
        <h2>{val.user} : {val.age}</h2>
        {/* <h2>{val}</h2> */}
        <button onClick={getArray}>Click</button>
        </>
    )
}


export default  ArrayOfObjects
