import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.jsx";
import HomePage from "./routes/home.jsx";
import CafePage from "./routes/cafe.jsx";
import ExperienciaPage from "./routes/experienciaStarbucks.jsx";
import MenuPage from "./routes/menu.jsx";
import StoresPage from "./routes/stores.jsx";
import NotFoundPage from "./routes/notFound.jsx";
function App() {
  return (
    <Router>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Header />

      <Routes>
        {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/experienciaStarbucks" element={<ExperienciaPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Footer/>
    </Router>
  );
}

export default App;
