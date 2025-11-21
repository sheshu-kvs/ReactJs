import Left from "./Left"
import Right from "./Right"

function Page1Content(props){
    return (
       <div className="flex gap-8 py-3 px-15 h-[90vh] ">
        <Left />
        <Right  users={props.users}/>
       </div>
    )
} 


export default Page1Content