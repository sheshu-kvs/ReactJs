import RightCard from "./RightCard"
import RightContent from "./RightContent"

function Right(props){
    console.log(props.users)
    return (<>
        <div id='right' className=" px-2 h-150 w-2/3 flex no-wrap gap-10 overflow-x-auto">Right
            {props.users.map(function (ele,idx){
                return<RightContent   id = {idx} img={ele.img} tag={ele.tag} />
            })}
             
            </div>
    
        </>
    )
}


export default Right