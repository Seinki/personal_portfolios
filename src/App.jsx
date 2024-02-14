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
        <Route
          path="/about"
          element={
            <AboutComponent bgColor={"about-page_newColor text-white"} />
          }
        />
        <Route path="/portfolio" Component={PortfolioComponent} />
        <Route
          path="/contact"
          element={<ContactComponent bgColor={"contact-page_newColor"} />}
        />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
