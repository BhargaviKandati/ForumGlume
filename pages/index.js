// import About from "./Components/About";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "./Components/About";
import Creators from "./Components/Creator";
import  Header  from "./Components/Header";
import NavBar from "./Components/NavBar";

export default function Home() {
  const [load,setLoading] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
        setLoading(true);
    },2000);
  });

  if(load){
    return (
      <>
        <Head>
          <title> GLUME | Home </title>
        </Head>
        <NavBar/>
        <Header/>
        <About/>
        {/* <Creators/> */}
      </>
    )
  }
  else{
    return (
      <>    
      <NavBar/>
      <div className='container'>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bc0c6b69321565.5b7d0cbe723b5.gif" alt="loader" style={{width:"300px"}}/>
      </div>
      </>
    )
  }
}
