import style from '../../styles/creators.module.css';

export default function Creators(){
    const creator = (name,skill) => {
        return (
                <section className={style["creator"]}>
                    <div>
                        <div className={style["creater-details"]}>
                            <img src="https://images.unsplash.com/photo-1669542746931-69d34a4f1ed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className={style["creator-image"]}/>
                            <div className={style["creator-profile"]}>
                                <h3 className={style["creator-name"]}>{name}</h3>
                                <span className={style["skill-badge"]}>{skill}</span>
                            </div>
                            <div className={style["creator-connect-button"]}><button >connect</button></div>
                        </div>

                    </div>
                    <p className={style["creator-description"]}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    </p>
                </section>
        )
    }
    return(
        <>
        <div style={{"display":"flex"}}>
            <main className={style["creators"]}>
                <h1>Creat<span className={style["purple-color"]}>ers!</span></h1>
                    <div className={style["container"]}>
                        {
                            creator("Gaurav N V","Web Developer")
                        }
                        {
                            creator("Bhargavi K","Web Developer")
                        }
                        {
                            creator("Renuka N","Web Developer")
                        }
                        {
                            creator("Jeevanantham A","Web Developer")
                        }

                    </div>
            </main>
        </div>
        </>
    )
}