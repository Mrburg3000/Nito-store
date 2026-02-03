import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Shoes from './components/shoes/shoes'
import Sports from './components/sports/sports'
import Timeline from './components/timeline/timeline'

function App() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Timeline /> 
      </div>
      <div>
        <Sports />
      </div>
      <div>
        <Shoes />
      </div>
      <div>
        <Footer />
      </div>
    </section>
    

  )
}

export default App
