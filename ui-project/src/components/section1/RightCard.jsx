function RightCard(props){
    return (<> 
              

           <div className="absolute  top-0 left-0 h-full w-full  py-8 px-6 flex flex-col justify-between  ">
            <h2 className="bg-white w-10 h-10  rounded-full flex items-center  justify-center text-2xl ">{props.id+1}</h2>
            <div >
                 <p className=" text-white font-bold leading-relaxed ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae natus, repellat facere illum quasi enim officia voluptas in excepturi fugiat quo, aut nisi nulla dicta</p>
           <div className="flex justify-between mt-8">
             <button className="bg-blue-600 text-2xl px-8 py-2  rounded-2xl">{props.tag}</button>
            <button className="bg-blue-600 text-2xl rounded-full px-3 py-2"><i className="ri-arrow-right-line"></i></button>

            </div>           
             </div>
           </div>
    </>)
}


export default RightCard