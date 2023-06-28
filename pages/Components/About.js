import style from "../../styles/about.module.css";
import Image from "next/image";
import AboutIMage from '../../public/about_image.png';


const About = () => {
    return (
        <main className={style["aboutus"]} id="about">
            <Image src={AboutIMage} alt="" className={style["aboutus-image"]}/>
            <div className={style["aboutus-content"]}>
                <h1 className={style["aboutus-content-heading"]}>About <span className="purple-color">Us!</span></h1>
                <p className={style["aboutus-content-bodytext"]}>
                    Medicine is a science that never ends and new ailments are discovered every day, We cannot ensure that doctors will not have any inquiries while performing their duties at analysing patient cases or as they learn the subject ,So there are several websites that offer paid versions to answer doctors queries, as opposed to that a premium version platform offering all licenced doctors are verified and permits them to clarify their queries with one another for providing a high-quality, cutting-edge medical care at developing nations.
                </p>
                <div className={style["aboutus-content-buttons"]}>
                    <button>Visit Forum</button>
                    <button>Start yout account</button>
                </div>
            </div>
        </main>
        )
}

export default About;