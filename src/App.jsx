import { Route, Routes } from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent'
import NavbarComponent from './components/NavbarComponent'
import AboutComponent from './components/AboutComponent'
import ExperienceComponent from './components/ExperienceComponent'
import PortfolioComponent from './components/PortfolioComponent'

function App() {

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path='/' Component={HomePageComponent}/>
        <Route  path='/about' Component={AboutComponent}/>
        <Route  path='/exp' Component={ExperienceComponent}/>
        <Route  path='/portfolio' Component={PortfolioComponent}/>
      </Routes>
    </>
  )
}

export default App
