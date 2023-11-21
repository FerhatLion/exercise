import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { About } from './components/About'
import { Books } from './components/Books'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Footer } from './components/Footer.jsx'


function App() {


  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" exact element= {<Home/>}/>
        <Route path="/books" exact element= {<Books/>}/>
        <Route path="/about" exact element= {<About/>}/>
        <Route path="/contact" exact element= {<Contact/>}/>
      </Routes>
      <Footer/>
    </div>

   
  )
}

export default App
