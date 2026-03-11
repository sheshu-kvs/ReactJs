function Cards(){
    return<>
    <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 min-h-screen  px-2 mt-2 bg-white  ">
        
         <div className="relative group h-[500px] text-2xl text-center rounded-xl max-w-full overflow-hidden">
            <img className="max-h-full  w-full object-covern-300 transition delay-250 ease-in-out group-hover:-translate-x-1 group-hover:scale-110" src="https://i.pinimg.com/736x/0e/5a/24/0e5a247ec656eef37a111b3535b4b639.jpg"  alt="" />

            <div className="absolute inset-0 flex items-center justify-center bg-purple-400 opacity-0 group-hover:scale-110 transition-opacity duration-300 pointer-events-none">
             <span className="text-white font-bold"> Spritual Guru Ragavendra Swamy</span>
            </div>
        </div>
        <div className="bg-amber-500  h-[500px] overflow-hidden text-2xl text-center rounded-xl   text-black">
            <img className="h-full  w-full object-cover  " src="https://i.pinimg.com/736x/90/c7/18/90c7187ccfc3d61187b701cb31accb07.jpg"  alt="" />
         
        </div>
        <div className="bg-amber-500 h-[500px] overflow-hidden text-2xl text-center overflow-hidden rounded-xl  text-black">
            
             <img className="h-full  w-full object-cover  " src="https://i.pinimg.com/736x/83/b4/a9/83b4a96b7b07de7ad0df959e312290c1.jpg"  alt="" />
             {/* https://i.pinimg.com/736x/1c/e2/94/1ce294d288e70a0388f5cb014f332b97.jpg */}
        </div>
               <div className="bg-amber-500 h-[500px] overflow-hidden text-2xl text-center overflow-hidden rounded-xl  text-black">
            
             <img className="h-full  w-full object-cover  " src="https://i.pinimg.com/736x/90/c7/18/90c7187ccfc3d61187b701cb31accb07.jpg"  alt="" />
        </div>
        <div className="bg-amber-500 h-[500px] text-2xl text-center rounded-xl overflow-hidden  text-black">
              <img className="h-full  w-full object-cover  " src="https://i.pinimg.com/736x/9d/1c/cc/9d1cccbc0c58452edbabdff424f1ef12.jpg"  alt="" />
        </div>
        <div className="bg-amber-500 h-[500px] text-2xl text-center rounded-xl  overflow-hidden text-black">
            <img className="h-full  w-full object-cover  " src="https://i.pinimg.com/736x/83/b4/a9/83b4a96b7b07de7ad0df959e312290c1.jpg"  alt="" />
        </div>
    </div>
    </>
}

export default Cards