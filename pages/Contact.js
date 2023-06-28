import Head from "next/head";
import Link from "next/link";
import NavBar from "./Components/NavBar";

export default function Contact() {
    return (
        <>
        <NavBar/>
        <Head>
            <title> GLUME | Contact </title>
        </Head>
        <div className="container">
            <form>
                <h1>
                    Conta<span className="purple-color">ct'!</span>
                </h1>
                <p style={{ fontSize:"12px",color:"grey",margin:"10px 0px 0px"}}>
                    Any issues ? feel free to contact us
                </p>
                <br></br>
                <input type="text" name="uemail" placeholder="Email..."/>
                <br></br>
                <textarea type="text" name="upass" placeholder="message..." style={{height:"200px",width:"250px",padding:"10px",border:"1px solid #ddd",borderRadius:"5px"}}/>
                <br></br>
                <button style={{width:"fit-content",borderRadius:"5px"}}>Send</button>
            </form>
        </div>
        </>
    )
}