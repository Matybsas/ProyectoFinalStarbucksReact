import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.jsx";
import HomePage from "./routes/home.jsx";
import CafePage from "./routes/cafe.jsx";
import ExperienciaPage from "./routes/experienciaStarbucks.jsx";
import MenuPage from "./routes/menu.jsx";
import LocalizarTiendaPage from "./routes/localizarTienda.jsx";
import TiendaPage from "./routes/tienda.jsx";
import NotFoundPage from "./routes/notFound.jsx";
import cafeUno from "../src/components/banners/image/cafe1.png";
import cafeDos from "../src/components/banners/image/cafe2.png";
import cafeTres from "../src/components/banners/image/cafe3.png";
import teUno from "../src/components/banners/image/te1.png";
import teDos from "../src/components/banners/image/te2.png";
import teTres from "../src/components/banners/image/te3.png";
import calientes1 from "../src/components/banners/image/calientes1.png";
import comidaUno from "../src/components/banners/image/comida1.png";
import comidaDos from "../src/components/banners/image/comida2.png";
import comidaTres from "../src/components/banners/image/comida3.png";
import paraLlevarUno from "../src/components/banners/image/cafeGranos.png";
import paraLlevarDos from "../src/components/banners/image/teSaquitos.png";
export const ThemeContext = createContext(null);
export const appContext = createContext(null);

const initialState = {
  listaProductosUno: [
    {
      img: cafeUno,
      text: "Cafés calientes",
    },
    {
      img: cafeDos,
      text: "Cafés helados",
    },
    {
      img: cafeTres,
      text: "Frappuccino",
    },
    {
      img: teUno,
      text: "Té caliente",
    },
    {
      img: teDos,
      text: "Té helado",
    },
    {
      img: teTres,
      text: "Heladas",
    },
    {
      img: calientes1,
      text: "Calientes",
    },
  ],

  listaProductosDos: [
    {
      img: comidaUno,
      text: "Cafés calientes",
    },
    {
      img: comidaDos,
      text: "Cafés helados",
    },
    {
      img: comidaTres,
      text: "Frappuccino",
    },
  ],
  listaProductosTres: [
    {
      img: paraLlevarUno,
      text: "Cafés calientes",
    },
    {
      img: paraLlevarDos,
      text: "Cafés helados",
    },
  ],
};

function reducer(state, action) {


  const oldState = { ...state };
  switch (action.type) {
    case "ADD_BEBIDAS":
      oldState.listaProductosUno.push(action.payload);
      alert("Producto agregado correctamente");
      return oldState;

    case "ADD_COMIDA":
      oldState.listaProductosDos.push(action.payload);
      alert("Producto agregado correctamente");
      return oldState;

    case "ADD_ENCASA":
      oldState.listaProductosTres.push(action.payload);
      alert("Producto agregado correctamente");
      return oldState;

    case "CLEAR_PRODUCT":
    default:
      alert("Error al cargar el producto");
      return state;
  }
}

function App() {
  const [theme, setTheme] = useState("light");
  const [appState, dispatch] = useReducer(reducer, initialState);
  let html = document.querySelector("html");
  html.setAttribute("data-theme", theme);
  return (
    <appContext.Provider value={{ appState, dispatch }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
            <Route path="/localizarTienda" element={<LocalizarTiendaPage />} />
            <Route path="/tienda" element={<TiendaPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </appContext.Provider>
  );
}

export default App;
