import Aboutme from "./components/aboutMe/aboutme"
import Hero from "./components/hero/hero"
import Intouch from "./components/inTouch/intouch"
import Navbar from "./components/navbar/navbar"
import Work from "./components/work/work"


function App() {


  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Aboutme />
      <Work />
      <Intouch />
    </div>
  )
}

export default App
