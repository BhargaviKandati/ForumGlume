import Link from 'next/link';
import style from '../../styles/navbar.module.css';



export default function ProfileNavBar() {
    const OpenMenu = () => {
        let sideMenu = document.getElementById("side-menu");

        if(sideMenu.style.display == "none" || sideMenu.style.display==""){
            sideMenu.style.display = "flex";
        }
    }

    const CloseMenu = () => {
        let sideMenu = document.getElementById("side-menu");

        if(sideMenu.style.display == "flex"){
            sideMenu.style.display = "none";
        }
    }
    return (
        <>
            <nav className="nav">
                <h1 className={style.brand }>Glume</h1>

                <ul className="nav_links">
                    <li><Link href="/" style={{"color":"white"}}>Home</Link></li>
                    <li>
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="/Forum">Forum</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                </ul>

                <span className="material-symbols-outlined menu-btn" id="menu-btn" onClick={OpenMenu}>
                    menu
                </span>

                <ul className="profile_nav_btns">
                    <li className='user-nav'>
                        <span className='avatar'></span>
                        <span className='user-info'>
                            <h3>Name</h3>
                            <p className='status green green-color'>Online</p>
                        </span>
                    </li>
                    <li>
                        <Link href="/Contact">
                            <span className="material-symbols-outlined">
                            chat
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                            <span className="material-symbols-outlined">
                            notifications
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                            <span className="material-symbols-outlined">
                                settings
                            </span>
                        </Link>
                    </li>
                    <li className='logoutbtn'>
                        <span className='status red' style={{position:"relative",top:"-5=4px"}}>logOut</span>
                    </li>
                </ul>
            </nav>
            <aside className="side-menu" id="side-menu">
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                    <h1 className={style.brand}>Glume </h1>
                    <span className="material-symbols-outlined" style={{"color":"red"}} id="close-btn" onClick={CloseMenu}>
                    close
                    </span>
                </div>
                
                <ul className='side-menu-links'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="/Forum">Forum</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Chat</Link>
                    </li>
                </ul>
                <ul className="side-menu-btns">
                    <button className='btn'><Link href="/Login" style={{"color":"white","fontFamily":"Acme","fontSize":"12px"}}>login</Link></button>
                    <button className='btn'><Link href="/Register" style={{"color":"black","fontFamily":"Acme","fontSize":"12px"}}>register</Link></button>
                </ul>
            </aside>
        </>
    )
}