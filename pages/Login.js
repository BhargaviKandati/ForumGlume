import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";


export default function Login(props) {
    const router = useRouter();
    const [load,setLoading] = useState(false);
    useEffect(() => {
        if(router.query.uname === "" || router.query.uname === undefined){
            setLoading(true);
        } else {
            setInterval(()=>{
                setLoading(true);
            },2000)
        }
    })
    if(load){
        return (
            <>
            <NavBar/>
            <Head>
                <title> GLUME | Login </title>
            </Head>
            <div className="container">
                <form>
                {
                    (router.query.uname != "" && router.query.uname != undefined)?<p>Welcome {router.query.uname}!,</p>:<p>Welcome Back!,</p>
                }
                    <h1>
                        Log<span className="purple-color">in!'</span>
                    </h1>
                    <p>
                        {
                            (router.query.isRegistered)?<span style={{color:"green",fontSize:"12px"}}>Account created successfully!!</span>:""
                        }
                    </p>
                    <br></br>
                    <input type="text" name="uemail" placeholder="Email..."/>
                    <br></br>
                    <input type="text" name="upass" placeholder="password..."/>
                    <br></br>
                    <button>Submit</button>
    
                    <p className="or">Or</p>
    
                    <button><span className="or-btn">New User?<Link href="/Register" style={{"color":"#000EEE","textDecoration":"none"}}>register</Link></span></button>
                </form>
            </div>
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