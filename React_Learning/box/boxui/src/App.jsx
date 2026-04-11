function App(){
  return <>
 <div className="bg-gray-400 min-h-screen">
 <div >
     <h2 className="text-center text-2xl text-center font-bold">This is the reactUI</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-3 mt-3 cursor-pointer">
    {/* p-16 md:p-20 lg:p-40  */}
    <div className="relative  group  bg-white  rounded-2xl h-72 overflow-hidden cursor-pointer   text-center">
      <div className=" absolute top-0 left-0 w-full h-1 bg-red-500  opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      box 1
      </div>
    <div className="group relative overflow-hidden cursor-pointer  bg-white border-0 rounded-2xl h-72  text-center ">
      {/* middle to to left & right */}
      <div className="absolute top-0 bottom-0 h-1 w-full bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom duration-700 ease-in-out"></div>
      box 2</div>
    <div className="group relative overflow-hidden cursor-pointer  bg-white border-0 rounded-2xl h-72  text-center ">
      {/* left to right */}
            <div className="absolute top-0 left-0 h-1 w-full bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 ease-in-out"></div>
            box 3

    </div>
    <div className="group relative overflow-hidden cursor-pointer bg-white border-0 rounded-2xl h-72  text-center ">
      {/* top to bottom */}
      <div className="absolute top-0 left-0 w-1 h-full bg-red-700 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-700 ease-in-out"></div>

      box 4</div>
    <div className="group relative overflow-hidden cursor-pointer bg-white border-0 rounded-2xl h-72  text-center ">
            <div className="absolute top-0 left-0 w-1 h-full w-full h-1 bg-red-700 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-700 ease-in-out"></div>
      box 5</div>
      {/* bottom to top left side */}
    <div className=" group relative overflow-hidden cursor-pointer bg-white border-0 rounded-2xl h-72  text-center ">
        <div className="absolute top-0 left-0 w-1 h-full bg-red-700 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-700 ease-in-out"></div>
      box 6</div>
    <div className="group relative overflow-hidden bg-white border-0 rounded-2xl h-72  text-center ">
      <div className="absolute top-0 bottom-0 w-1 h-full bg-red-800 scale-y-0 group-hover:scale-y-100 transition-duration origin-right duration-700 ease-in-out"></div>
      box 7</div>
    <div className="bg-white border-0 rounded-2xl h-72  text-center">box 8</div>
    <div className="bg-white border-0 rounded-2xl h-72  text-center">box 9</div>
    <div className="bg-white border-0 rounded-2xl h-72  text-center">box 10</div>
    

  </div>
 </div>
 </div>
  </>
}



export default App