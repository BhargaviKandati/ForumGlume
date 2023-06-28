import style from '../styles/forum.module.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import { API } from '../API_KEY/APILINK';
import Head from 'next/head';

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${API}api/questions`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
  }

export default function Forum({ data }) {
    const [load,setLoading] = useState(false);
    const [questions,setQuestions] = useState(data);
    const [questions2,setQuestions2] = useState(data);

    useEffect(()=>{
        setInterval(()=>{
            setLoading(true);
        },2000);
    });
    
    const Search = () => {
        let val =  document.getElementById("search-filed").value;

        if(val != ""){
            const res  = questions.filter((question) => {
                return question.question.toLowerCase().includes(val.toLowerCase());
            });
            if(res.length !== 0) setQuestions2(res);
            else setQuestions2(questions);

        } else {
            setQuestions2(questions);
        }
    }
    const QuestionBox = (id,question,description,name,skill,time) => {
        return (
            <section className={style["question-box"]} key={id}>
                    <div className={style["question-box-head"]}>
                        <h5>{question.slice(0,50)+"..."}</h5>
                        <button className={style["button"]}>Answer</button>
                    </div>
                    <div>
                        <p className={style["question-box-description"]}>
                            { description.slice(0,60) } <a href="/" className="readmore">Readmore...</a>
                        </p>
                    </div>
                    <div className={style["question-box-footer"]}>
                        <div className={style["profile-box"]}>
                        <img src={`https://avatars.dicebear.com/api/adventurer/${uuidv4()}.svg`} alt="" className={style["profile-avatar"]}></img>
                            <div className={style["profile"]}>  
                                <h5 className={style["name"]}>{ name }</h5>
                                <p className={style["skill"]}>{ skill }</p>
                            </div>
                        </div>
                        <span className={style["time"]}>{ time }</span>

                    </div>
                </section>
        )
    }
    if(load){
        return (
            <>
            <Head>
            <title> GLUME | Forum </title>
            </Head>
            <NavBar/>
            <main className={style["forum-page"]}>
            <section className={style["side-content"]}>
                <div className="quick-links">
    
                </div>
                <div className="top-questions">
    
                </div>
                <div className="other">
    
                </div>
            </section>
                <section className={style["forum-content"]}>
                    <h1 className={style["forum-heading"]}>
                        For<span className={style["purple-color"]}>um'!</span>
                    </h1>
                    <br/><br/>
                    <div className={style["search"]}>
                        <input type="search...." name="search" className={style["search-filed"]} placeholder="Search...." id="search-filed" onChange={Search}/> <button className={style["search-btn"]}>Search</button>
                    </div>
                    {
                        questions2.map((question) => QuestionBox(question.id,question.question,question.description,question.user_name,question.user_skill,question.time)
                        )
                    }
                </section>
                <section className="questioner-box"></section>
            </main>
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