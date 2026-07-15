import { BrowserRouter, Routes, Route, /* Navigate */ } from 'react-router-dom';
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

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="bg-neutral-100 dark:bg-neutral-950">
      <ScrollToTop /> {/* se añade para que siempre vuelve al inicio */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/Cartelera" element={<Cartelera />} />
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/User" element={<User />} />
        <Route path="/Articulo/:slug" element={<Articulo />} />
        {/*<Route path="/Error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/Error404" replace />} /> */}
        {/* Ruta para cualquier otra ruta no definida y usamos Navigate para redirigir a la página de error */}
      </Routes>
    </main>

    <Footer />

  </BrowserRouter>
)
export default App
