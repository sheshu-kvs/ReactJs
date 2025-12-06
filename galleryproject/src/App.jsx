import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";



function App() {
  const [UserData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  async function getData() {
    let resp = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=5`);
    console.log(resp.data);
    setUserData(resp.data);
  }



  let printUserData = "No Data Found";
  if (UserData.length > 0) {
    printUserData = UserData.map((elem, idx) => {
      return (
        <div className="h-60" key={idx}>
          <a href={elem.url}>
            <img className="h-full w-full object-cover  rounded-2xl" loading="eager" src={elem.download_url} alt="" />
            <h2 className="text-white text-2xl ">{elem.author}</h2>
          </a>

        </div>
      )
    })
  }

  useEffect(() => {
    getData();
  }, [index])



  return (<>
    <div className="h-full">
      < div className="bg-black  h-screen p-5">
        {/* <h2 className="text- fixed bg-amber-600  w-4 p-1">{index}</h2> */}
        <div className="grid grid-col-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
          {printUserData}
        </div>
        <div className="flex justify-center items-center mt-6 gap-6">
          <button className="text-black bg-amber-200 active:scale-95 px-7 py-2 rounded cursor-pointer"
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
              }
              // setIndex(index-1)
            }}>Prev</button>
            <h2 className="text-white">Page {index}</h2>
          <button className="text-black bg-amber-200 active:scale-95 px-7 py-2 rounded cursor-pointer"
            onClick={() => {
              setIndex(index + 1);
            }
            }>Next</button>
        </div>

      </div>
    </div>


  </>
  )
}

export default App