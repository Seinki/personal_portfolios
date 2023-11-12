import { Route, Routes } from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent'
import NavbarComponent from './components/NavbarComponent'

function App() {

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path='/' Component={HomePageComponent}/>
      </Routes>
    </>
  )
}

export default App
