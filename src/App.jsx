
import { ScrollTrigger, SplitText } from 'gsap/all'
import './App.css'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'


gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  return (
    <main className=''>
      <Navbar />
      <Hero />
      <Cocktails/>
     </main>
  )
}

export default App
