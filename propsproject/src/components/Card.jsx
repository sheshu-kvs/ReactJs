import { Bookmark } from 'lucide-react'

function Card(props){
    return (
        <>
        <div className="card">
    <div className="top">
      <img src={props.logo} alt="" />
   <div className="side">
      <button>Save</button>
         <Bookmark className='book-mark' />
   </div>
    </div>
    <div className="center">
     <h2> {props.name} <span>{props.avail}</span></h2>
      <h2>{props.des}</h2>
      <div className="btns">
        <button>{props.tag1}</button>
        <button>{props.tag2}</button>
      </div>
    </div>
    <div className="bottom">
         <h2>{props.pay}</h2>
         <p>{props.place}</p>
         <button>Applay Now</button>
    </div>
  </div></>
    )
}

export default Card