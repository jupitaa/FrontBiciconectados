import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import RoutePage from "./pages/RoutePage";
import ComunityPage from "./pages/ComunityPage";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/ProfilePage";
import ForgotPässwordPage from "./pages/ForgotPassword";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Conocenos from "./pages/Conocenos";

function App() {
  return (
    <>
       <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/conocenos" element={<Conocenos/>} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forgotpassword" element={<ForgotPässwordPage />}></Route>
        <Route path="/ruta" element={<RoutePage />}></Route>
        <Route path="/comunity" element={<ComunityPage />}></Route>
        <Route path="/eventos" element={<EventsPage />}></Route>
        <Route path="/perfil" element={<ProfilePage />}></Route>
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
