import Features from "./components/Features.jsx"
import About from "./components/About.jsx"
import Brands from "./components/Brands.jsx"
import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import Possibilities from "./components/possibilities.jsx"
import GetStarted from "./components/GetStarted.jsx"
import Happening from "./components/Happening.jsx"
import Footer from "./components/footer.jsx"

function App() {  
  return (
    <div className="bg-[#040C18] px-10 py-5">
      <NavBar />
      <Hero />
      <Brands />
      <About />
      <Features />
      <Possibilities />
      <GetStarted />
      <Happening />
      <Footer />
    {/* you have to follow this order according to how you want it to appear on your website, navbar then hero. */}
    </div>
  )
}

export default App
