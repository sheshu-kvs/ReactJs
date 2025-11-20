
import Card from './components/Card'
import User from './components/user'

const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    available: "3 days ago",
    designation: "Software Engineer",
    tag1: "Full-time",
    tag2: "Available",
    pay: "₹1200/hr",
    place: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    available: "1 day ago",
    designation: "Backend Developer",
    tag1: "Full-time",
    tag2: "Available",
    pay: "₹950/hr",
    place: "Hyderabad"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    available: "5 days ago",
    designation: "Data Engineer",
    tag1: "Full-time",
    tag2: "Closed",
    pay: "₹1100/hr",
    place: "Chennai"
  },
  {
    brandLogo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    available: "2 days ago",
    designation: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Available",
    pay: " ₹600/hr",
    place: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    companyName: "Zoho",
    available: "6 days ago",
    designation: "Java Developer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹800/hr",
    place: "Chennai"
  },
  {
    brandLogo: "https://logo.clearbit.com/tcs.com",
    companyName: "TCS",
    available: "7 days ago",
    designation: "Testing Engineer",
    tag1: "Full-time",
    tag2: "Closed",
    pay: " ₹500/hr",
    place: "Mumbai"
  },
  {
    brandLogo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    available: "4 days ago",
    designation: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹700/hr",
    place: "Pune"
  },
  {
    brandLogo: "https://logo.clearbit.com/wipro.com",
    companyName: "Wipro",
    available: "3 days ago",
    designation: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹850/hr",
    place: "Hyderabad"
  },
  {
    brandLogo: "https://logo.clearbit.com/accenture.com",
    companyName: "Accenture",
    available: "8 days ago",
    designation: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Closed",
    pay: " ₹1000/hr",
    place: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/cognizant.com",
    companyName: "Cognizant",
    available: "1 day ago",
    designation: "Support Engineer",
    tag1: "Part-time",
    tag2: "Available",
    pay: " ₹400/hr",
    place: "Kochi"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    available: "9 days ago",
    designation: "AI Engineer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹1300/hr",
    place: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/paytm.com",
    companyName: "Paytm",
    available: "4 days ago",
    designation: "Android Developer",
    tag1: "Full-time",
    tag2: "Closed",
    pay: " ₹750/hr",
    place: "Noida"
  },
  {
    brandLogo: "https://logo.clearbit.com/ola.com",
    companyName: "Ola",
    available: "2 days ago",
    designation: "Data Analyst",
    tag1: "Part-time",
    tag2: "Available",
    pay: " ₹550/hr",
    place: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/sw iggy.com",
    companyName: "Swiggy",
    available: "6 days ago",
    designation: "SDE Intern",
    tag1: "Internship",
    tag2: "Available",
    pay: " ₹300/hr",
    place: "Hyderabad"
  },
  {
    brandLogo: "https://logo.clearbit.com/zomato.com",
    companyName: "Zomato",
    available: "1 day ago",
    designation: "React Developer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹700/hr",
    place: "Delhi"
  },
  {
    brandLogo: "https://logo.clearbit.com/byjus.com",
    companyName: "BYJU'S",
    available: "5 days ago",
    designation: "Business Analyst",
    tag1: "Full-time",
    tag2: "Closed",
    pay: " ₹650/hr",
    place: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    available: "3 days ago",
    designation: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹1400/hr",
    place: "Noida"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    companyName: "Intel",
    available: "4 days ago",
    designation: "Embedded Engineer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹1000/hr",
    place: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/hp.com",
    companyName: "HP",
    available: "8 days ago",
    designation: "Network Engineer",
    tag1: "Full-time",
    tag2: "Closed",
    pay: " ₹900/hr",
    place: "Chennai"
  },
  {
    brandLogo: "https://logo.clearbit.com/dell.com",
    companyName: "Dell",
    available: "1 day ago",
    designation: "System Engineer",
    tag1: "Full-time",
    tag2: "Available",
    pay: " ₹850/hr",
    place: "Pune"
  }
];
/* 
  brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    available: "3 days ago",
    designation: "Software Engineer",
    tag1: "Full-time",
    tag2: "Available",
    pay: "₹1200/hr",
    place: "Bangalore"*/



function App(){
  return(<>
 {jobs.map((ele)=>{
  return <Card logo={ele.brandLogo} name={ele.companyName} avail={ele.available} des={ele.designation} tag1={ele.tag1} tag2 ={ele.tag2} pay={ele.pay} place={ele.place} />
 })}
  </>)
}


export default App