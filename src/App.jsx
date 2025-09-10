import Features from "./components/Features"
import About from "./components/About"
import Brands from "./components/Brands"
import Hero from "./components/Hero"
import NavBar from "./components/navBar"
import Possibilities from "./components/possibilities"
import GetStarted from "./components/GetStarted"
import Happening from "./components/Happening"
import Footer from "./components/footer"

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
