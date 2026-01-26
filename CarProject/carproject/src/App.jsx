import { useState } from "react";
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App(){
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passion"},
    {text1:"Give into",text2:"your passion"}
  ];

  const[heroCount,SetHeroCount]=useState(0);
  const[playStatus,SetPlayStatus]=useState(false);
  return <>
    <Background heroCount={heroCount} playStatus={playStatus}/>
    <NavBar />
    <Hero
    heroData ={heroData[heroCount]}
    heroCount ={heroCount}
    playStatus ={playStatus}
    SetPlayStatus = {SetPlayStatus}
    SetHeroCount = {SetHeroCount}
     />
  </>;
}


export default App