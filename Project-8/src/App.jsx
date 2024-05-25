import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Program from "./Components/Program/Program"
import Title from "./Components/Title/Title"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'our program' Title = 'What we offer'/>
        <Program/>
        <About/>
      </div>
    </>
  )
}

export default App
