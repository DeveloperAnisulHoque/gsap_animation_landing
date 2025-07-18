
import { ScrollTrigger, SplitText } from 'gsap/all'
import './App.css'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'


gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  return (
    <main className=''>
      <Navbar />
      <Hero />
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
     </main>
  )
}

export default App
