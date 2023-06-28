import style from '../../styles/footer.module.css'

export default function Footer(){
    return (
        <>
        <footer className={style["footer"]}>
            <div className={style["brand-info"]}>
                <h1>GLU<span className={style["purple-color"]}>ME</span></h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                </p>
            </div>
            <div className={style["contact"]}>
                <h3>Contact</h3>
                <input type="text" placeholder='Email..'/>
                <button>Message</button>
            </div>
            <div>
                <h3 style={{"marginBottom":"15px"}}>Socials</h3>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
            <div>
                <h3>Support</h3>
                <p style={{"display":"flex","alignItems":"center","marginTop":"15px",justifyContent:"center"}}>
                <i className="fa-solid fa-envelope" style={{"marginRight":"5px"}}></i>
                    support@forumglume.com
                </p>
            </div>
        </footer>
        <section className={style["footer-dark"]}>
            <i className="fa-solid fa-copyright" style={{"fontSize":"13px","marginRight":"10px"}}></i>
            2022 All rights Reserved GCORP
        </section>
        </>
    )
}