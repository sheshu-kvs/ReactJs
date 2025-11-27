function App(){
  // localStorage.setItem('user','deva')
  // localStorage.setItem('Age','10')

  // let user = localStorage.getItem('user');
  // let Age = localStorage.getItem('Age');
  // console.log(user);
  // console.log(Age);
  // localStorage.clear()
  localStorage.removeItem('Age')
  let userObj={
    name:"shiva",
    age:20,
    city:"bhopal"
  }
  // console.log(userObj)
  
  localStorage.setItem('user',JSON.stringify(userObj))



  // let data = localStorage.getItem('user');
  // console.log(data);

  let data = localStorage.getItem('user');
  

  //convert the stringfy data to the user obj... 
  console.log(JSON.parse(data));
  
  
  
  
  return (
    <div>
    
      {/* <button className="bg-gray-500 rounded-2xl p-10 m-10 font-bold text-2xl">Get Data</button> */}

    </div>
  )
}


export default App