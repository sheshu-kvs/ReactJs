import Section1 from "./components/section1/section1"
import Section2 from "./components/section2/section2"



const users = [{
  img:'https://plus.unsplash.com/premium_photo-1661778544419-41b124812d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D',
  intro: '',
  tag: 'Satisfied'

}, {
  img: 'https://plus.unsplash.com/premium_photo-1661589856899-6dd0871f9db6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D',
  intro: 'Dispo',
  tag: 'Underserved'
}, {
  img: 'https://media.istockphoto.com/id/1124239071/photo/happy-businesswoman-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=MhVefjMXfzn4YKKQnOZOdu4jw471nfq7S4cudwbaP3I=',
  intro: '',
  tag: 'Underbankes'
},
{
  img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D',
  intro: '',
  tag: 'Underbankes'
}
]



function App() {
  return (
    <>
      <Section1  users={users}/>
      <Section2 />
    </>
  )
}
export default App