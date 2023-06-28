import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "./Components/NavBar";

export default function Register(){
    const router =  useRouter();
    const HandleSubmit = (e) => {
        e.preventDefault();
        let uname = e.target.uname.value;
        let uemail = e.target.uemail.value;
        let upass = e.target.upass.value;

        if( uname !== "" && uemail !== "" && upass !== ""){
            router.push({
                pathname:'/Login',
                query:{ 
                    isRegistered:true,
                    uname:uname,
                } 
            });
        } else {
            alert("Enter All Details");
        }

    }
    return (
        <>
        <NavBar/>
        <Head>
            <title> GLUME | Register </title>
        </Head>
        <div className="container">
            <form onSubmit={ HandleSubmit }>
            <p>Welcome!,</p>
                <h1>
                    Regis<span className="purple-color">ter!'</span>
                </h1>
                
                <br></br>
                <input type="text" name="uname" placeholder="Name..."/>
                <br></br>
                <input type="text" name="uemail" placeholder="Email..."/>
                <br></br>
                <input type="text" name="upass" placeholder="password..."/>
                <br></br>
                <button>Submit</button>

                <p className="or">Or</p>

                <button><span className="or-btn">Existing User?<Link href="/Login" style={{"color":"#000EEE","textDecoration":"none"}}>login</Link></span></button>
            </form>
        </div>
        </>
    )
}