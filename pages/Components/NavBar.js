import Link from 'next/link';
import style from '../../styles/navbar.module.css';

const NavBar = () => {

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

                <ul className="nav_btns">
                    <button className='btn'><Link href="/Login">login</Link></button>
                    <button className='btn'><Link href="/Register">register</Link></button>
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
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="/Forum">Forum</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
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

export default NavBar;