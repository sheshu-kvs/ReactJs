import Left from "./Left"
import Nav from "./NavBar"
import Page1Content from "./Page1Content"
import Right from "./Right"

function Section1(props){
    return (
        <div className=" h-screen">
              

             <Nav /> 
               Section 1
            <Page1Content users={props.users} />
            
          
        
        </div>
    )
}

export default Section1