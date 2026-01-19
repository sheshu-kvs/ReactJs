import { useNavigate, useParams } from "react-router-dom"

function CourseDetailPage(){
    const params = useParams();
    console.log(params);
          let navigate = useNavigate();
    function clicked(){
        // console.log("btn was clicked");
        navigate('/')
    }
    
    return <>
    <button className="text-xl font-bold bg-green-600 rounded p-2 m-2" onClick={clicked}>Click back </button>
    <div className="flex justify-center font-semibold text-xl  text-black">
      <h2> {params.java} An Course Detail Page..</h2>
      {/* in the route elment:java that we need to repeat here */}

    </div>
    </>
}

export default CourseDetailPage