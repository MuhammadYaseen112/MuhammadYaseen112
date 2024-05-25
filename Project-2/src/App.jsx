import './App.css'
import Button from './components/Button/button.jsx'
import Contact from './components/Contact/contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ContactForm from './components/contactForm/contactForm.jsx'
function App() {

  return (
    <div>
      <Navbar/>
      <Contact/>
      <ContactForm/>
      <Button/>
    </div>
  )
}

export default App
