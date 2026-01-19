import { useNavigate } from "react-router-dom";

function Nav2(){
    let navigate = useNavigate();
    return<>
    <div className="flex gap-10 py-8 bg-cyan-900 text-white font-semibold text-xl ">
        <button className="bg-amber-600 px-3 rounded outline-scale-90"
        onClick={()=>{
            navigate('/')
        }}>Home</button>
        <button className="bg-amber-600 px-3 rounded"  onClick={()=>{
            navigate(-1)
        }}>Back</button>
        <button className="bg-amber-600 px-3 rounded" 
         onClick={()=>{
            navigate(+1)
        }}>Next</button>
    </div>
    </>
}
export default Nav2