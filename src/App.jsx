import { Route, Routes } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import HomePageComponent from "./components/HomePageComponent";
import NavbarComponent from "./components/NavbarComponent";
import PortfolioComponent from "./components/PortfolioComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePageComponent} />
        <Route path="/about" Component={AboutComponent} />
        <Route path="/portfolio" Component={PortfolioComponent} />
        <Route path="/contact" Component={ContactComponent} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
