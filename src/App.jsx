
import {Navbar} from './Components/Navbar.jsx'
import {Home} from './Components/Home.jsx'
import {Hero} from './Components/Hero.jsx'
import {ProductCards} from './Components/ProductCards.jsx'
import {Footer} from './Components/Footer.jsx'
import {Testimonials} from './Components/Testimonials.jsx'
import {Categories} from './Components/Categories.jsx'
import {Routes,Route} from 'react-router-dom'

function App() {

   return (
    <>
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Hero" element={<Hero/>}/>
      <Route path="/ProductCards" element={<ProductCards/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Testimonials" element={<Testimonials/>}/>
      <Route path="/Categories" element={<Categories/>}/>
          </Routes>

    </div>
    </>
  )
}
export default App
