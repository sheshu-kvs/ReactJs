import RightCard from "./RightCard"

function RightContent(props){
    return(
        <div  className="h-142 w-70 relative overflow-hidden rounded-4xl shrink-0" >
          <img className="h-full object-cover rounded-2xl " src={props.img} alt="" />
         
         <RightCard id={props.id} tag ={props.tag} />
         
        </div>
    )
}


export default RightContent