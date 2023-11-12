import { Route, Routes } from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent'
import NavbarComponent from './components/NavbarComponent'
import AboutComponent from './components/AboutComponent'

function App() {

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path='/' Component={HomePageComponent}/>
        <Route  path='/about' Component={AboutComponent}/>
      </Routes>
    </>
  )
}

export default App
