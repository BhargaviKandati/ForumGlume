import '../styles/globals.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
