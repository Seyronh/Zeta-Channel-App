import { BrowserRouter, Routes, Route, /* Navigate */ } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Tickets from './pages/Tickets.jsx';
import Cartelera from './pages/Cartelera';
import Festival from './pages/Festival';
import Agenda from './pages/Agenda';
import User from './pages/User';
import ScrollToTop from './components/routes/ScrollToTop';
import Articulo from './pages/Articulo';
/* import Error404 from './pages/Error404'; */
import Footer from './components/Footer';

const App = () => {

  const [seleccionadosViernes, setSeleccionadosViernes] = useState([]);
  const [seleccionadosSabado, setSeleccionadosSabado] = useState([]);
  const [seleccionadosDomingo, setSeleccionadosDomingo] = useState([]);

  const [entradaDia, setEntradaDia] = useState(1);
  const [entradaInfantilDia, setEntradaInfantilDia] = useState(0);
  const [entrada3Dias, setEntrada3Dias] = useState(0);
  const [entradaInfantil3Dias, setEntradaInfantil3Dias] = useState(0);

  const [userIniciado, setUserIniciado] = useState(false);

  const [popupHome, setpopupHome] = useState(false);
  const [popupQuepasa, setpopupQuepasa] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <main className="bg-neutral-100 dark:bg-neutral-950">
        <ScrollToTop /> {/* se añade para que siempre vuelve al inicio */}

        <Routes>
          <Route path="/" element={<Home popupHome={popupHome} setpopupHome={setpopupHome} popupQuepasa={popupQuepasa} setpopupQuepasa={setpopupQuepasa} />} />
          <Route path="/Tickets" element={<Tickets seleccionadosViernes={seleccionadosViernes} seleccionadosSabado={seleccionadosSabado} seleccionadosDomingo={seleccionadosDomingo} setSeleccionadosViernes={setSeleccionadosViernes} setSeleccionadosSabado={setSeleccionadosSabado} setSeleccionadosDomingo={setSeleccionadosDomingo} entradaDia={entradaDia} entradaInfantilDia={entradaInfantilDia} entrada3Dias={entrada3Dias} entradaInfantil3Dias={entradaInfantil3Dias} setEntradaDia={setEntradaDia} setEntradaInfantilDia={setEntradaInfantilDia} setEntrada3Dias={setEntrada3Dias} setEntradaInfantil3Dias={setEntradaInfantil3Dias} />} />
          <Route path="/Cartelera" element={<Cartelera />} />
          <Route path="/Festival" element={<Festival />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/User" element={<User seleccionadosViernes={seleccionadosViernes} seleccionadosSabado={seleccionadosSabado} seleccionadosDomingo={seleccionadosDomingo} entradaDia={entradaDia} entradaInfantilDia={entradaInfantilDia} entrada3Dias={entrada3Dias} entradaInfantil3Dias={entradaInfantil3Dias} userIniciado={userIniciado} setUserIniciado={setUserIniciado} />} />
          <Route path="/Articulo/:slug" element={<Articulo />} />
          {/*<Route path="/Error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/Error404" replace />} /> */}
          {/* Ruta para cualquier otra ruta no definida y usamos Navigate para redirigir a la página de error */}
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  )
}
export default App
