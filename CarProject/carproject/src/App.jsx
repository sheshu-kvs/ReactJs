import { useState } from "react";
import Background from "./components/Background/Background";

function App(){
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passion"},
    {text1:"Give into",text2:"your passion"}
  ];

  const[heroCount,SetHeroCount]=useState(1);
  const[playStatus,SetPlayStatus]=useState(false);
  return <>
    <Background heroCount={heroCount} playStatus={playStatus}/>
  </>;
}


export default App