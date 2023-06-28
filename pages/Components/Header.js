import style from '../../styles/Header.module.css';
import Image from 'next/image';
import headerimage from '../../public/header_image.png';

function Header(){
    return (
        <>
        <header className={style.header}>
            <div className={style["header-content"]}>
                <h1 className={style["header-heading-text"]}>
                    WELCOME TO
                    FORUM <span className={style["purple-color"]}>GLUME</span>
                </h1>
                <p className={style["header-sub-text"]}> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard 
                </p>
                <div className={style["header-buttons"]}>
                    <button>Explore</button>
                    <button>Create free Account</button>
                </div>
            </div>
            <Image src={headerimage} alt="" className={style["header-image"]}/>
        </header>
        </>
    )
}

export default Header;