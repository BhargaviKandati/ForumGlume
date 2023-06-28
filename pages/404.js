import Link from 'next/link'
import NavBar from './Components/NavBar'

export default function FourOhFour() {
  return (
    <>
    <NavBar/>
    <div className='container'>
    <div>
    <p style={{fontWeight:"300",fontSize:"18px"}}>
        404 | Oop's Page Not Found
    </p>
    <br></br>
    <button className='btn'>
    <Link href="/">
        Go back home
    </Link>
    </button>
    </div>
    </div>
  </>
  )
}