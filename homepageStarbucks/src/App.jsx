import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.jsx";
import HomePage from "./routes/home.jsx";
import CafePage from "./routes/cafe.jsx";
import ExperienciaPage from "./routes/experienciaStarbucks.jsx";
import MenuPage from "./routes/menu.jsx";
import StoresPage from "./routes/stores.jsx";
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
  switch (action.type) {

    case "ADD_BEBIDAS":{
      const oldState = state;
      oldState.listaProductosUno.push(action.payload);
      return oldState;
      }
      case "ADD_COMIDA":{
        const oldState = state;
        oldState.listaProductosDos.push(action.payload);
        return oldState;
        }
        case "ADD_ENCASA":{
          const oldState = state;
          oldState.listaProductosTres.push(action.payload);
          return oldState;
          }
    
  
    
      case "CLEAR_PRODUCT":
      default:
      return state;
  }
}

function App() {
  const [dataTheme, setTheme] = useState("light");
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{ appState, dispatch }}>
      <ThemeContext.Provider value={{ dataTheme, setTheme }}>
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
