function App(){
  return(
   <>
    <button onClick={click} className="btn">Click</button>
    <button onMouseEnter={Mouse} className="btn">Please hover on me u will see the differnce</button>
    <button onDoubleClick={dbl} className="btn">Please Click 2X i will work</button>
    
    {/* <input type="text" onChange={function (){
      console.log("user was typping..")
    }} placeholder="Enter The Name" /> */}
    {/* Synthetic Base Event */}
    
    <input type="text" onChange={function (ele){
      // console.log(ele)
      // if write the target in the console it will display the which item for the example input tag..
            console.log(ele.target)
    }} placeholder="Enter The Name" />
   </>
  )
}


function click(){
  console.log('button was clicked..');
}
function Mouse(){
  console.log("Mouse is Came to Near to Me...")
}
function dbl(){
  console.log("This btn was clicked 2X");
}


export default App