function Card(props){
    return (
         
   
      <div className="card">
       {/* {props.img} */}
        <img src={props.img} alt="" />
        <h2> {props.user}</h2>       
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <button>View</button>
      </div>

    )
}

export default Card