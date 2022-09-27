import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Nav } from '../components/Nav'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
function MyApp({ Component, pageProps, router }) {
  return (
  <>
  
   <CartProvider>
  <Navbar/>
  {/* <Nav/> */}
  <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
    pageInitial: {
      opacity:0,
      x:-200,
    },
    pageAnimate: {
      opacity:1,
      x:0,
      transition: {
        duration:1,
        type:'spring',
        bounce: 0.1,

      }
    }
  }}>
  <Component {...pageProps} />
  
  </motion.div>
  <Menu/>
  <Footer/>
  </CartProvider>
   </>
   )
}

export default MyApp
