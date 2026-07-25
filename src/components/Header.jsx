import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoZeta from '../assets/img/logo-zeta-channel.svg';
import lightbulbIcon from '../assets/img/icon/icon-lightbulb.svg';
import searchIcon from '../assets/img/icon/icon-search.svg';
import ticketIcon from '../assets/img/icon/icon-ticket.svg';
import BottomBar from './BottomBar';
import PopupMenu from './PopupMenu';
import Btn from './Btn';
import BtnBurguer from './BtnBurguer';

const Header = () => {



  const [language, setLanguage] = useState('ES');
  /* por defecto español que es lo que se guarda en lenguage */

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  }; /* el prev es el valor anterior del estado */

  const [esOscuro, setEsOscuro] = useState(() => {
    return typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false;
  });
  /* si tenemos dos elemntos a elegir false y true */
  /* esto me lo ha hecho la IA pq me daba error y lee si está la clase 'dark' en el documento */

  const toggleTheme = () => {
    if (esOscuro) { //Si esta en modo oscuro, cambiamos de oscuro => claro
      document.documentElement.classList.remove("dark");
      setEsOscuro(false);
    } else { //Si no esta en modo oscuro, cambiamos de claro => oscuro
      document.documentElement.classList.add("dark");
      setEsOscuro(true);
    }
  }

  const [popupIsOpen, setpopupIsOpen] = useState(false);

  return (
    <header className="w-full">


      <nav className="bg-light dark:bg-dark text-black dark:text-white flex items-center w-full justify-between px-3 fixed top-0 left-0 z-998 lg:px-8">

        {/* Burguer y componente btn para TABLET  */}
        <div className="items-center gap-5 hidden md:flex lg:hidden">
          <BtnBurguer popupIsOpen={popupIsOpen} setpopupIsOpen={setpopupIsOpen} />
          <Btn
            text={
              <div className="flex items-center">
                <img src={ticketIcon} alt="Icono" className="w-5 h-5 mr-3" />
                Tickets
              </div>}
            variant="solidgreen"
            size="xs"
            font="pixel"
            to="/Tickets"
          />
        </div>

        {/* He hecho que en el PC la bottom bar pase al header reutilizando el componente */}
        <div className="hidden lg:flex">
          <BottomBar />
        </div>


        {/* ESTA ES EL LOGO */}

        <div className="pt-2.5">
          {/* intentar hacer que los ojos sigan el ratón con el cursor */}
          <Link to="/">
            <img alt="Zeta Channel Logo" className="w-[60px] lg:w-[120px]" src={logoZeta} />
          </Link>
          {/* LA / TE LLEVA A LA PAGINA PRINCIPAL */}
        </div>

        {/* ESTO ES FIJO SIEMPRE IDIOMA - MODO OSCURO CLARO - LUPA + BURGUER MOVIL */}

        <div className="flex gap-6 items-center">

          {/* Seleccionador de Idioma */}
          <button
            onClick={toggleLanguage}
            className="flex flex-col items-center justify-center cursor-pointer font-pixel text-2xl"
          >
            <div className="flex gap-1 items-center justify-center">
              <span className="text-black dark:text-white leading-6 ">
                ES
              </span>
              <span className="text-black dark:text-white leading-6 ">
                /
              </span>
              <span className="text-black dark:text-white leading-6">
                EN
              </span>
            </div>

            <div className="flex h-[2px] w-full justify-between">
              <div className={`h-full w-7 transition-colors duration-150 ${language === 'ES' ? 'bg-black dark:bg-white' : 'bg-transparent'}`} />
              <div className={`h-full w-7 transition-colors duration-150 ${language === 'EN' ? 'bg-black dark:bg-white' : 'bg-transparent'}`} />
            </div>
          </button>

          {/* Boton que cambia de Modo */}
          <button
            onClick={toggleTheme}
            className=" w-6 h-6 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer lg:w-8 lg:h-8"
            aria-label="Toggle theme"
          >
            <img alt="Lightbulb Icon" className="h-6 w-5 lg:w-7 lg:h-8 dark:invert" src={lightbulbIcon} />
          </button>


          {/* Boton de Busqueda */}
          <button
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer size-6 transition-colors duration-150 lg:w-8 lg:h-8"
            aria-label="Search"
          >
            <img alt="Search Icon" className="h-6 w-6 lg:w-8 lg:h-8 dark:invert" src={searchIcon} />
          </button>


          {/* MENU BURGER MOVIL */}
          <div className="md:hidden">
            <BtnBurguer popupIsOpen={popupIsOpen} setpopupIsOpen={setpopupIsOpen} />
          </div>

          <div className="hidden lg:block">
            <Btn
              text={
                <div className="flex items-center">
                  <img src={ticketIcon} alt="Icono" className="w-5 h-5 mr-3" />
                  Tickets
                </div>}
              variant="solidgreen"
              size="lg"
              font="pixel"
              to="/Tickets"
              
            />
          </div>
        </div>
      </nav>

      {/* BOTTOM BAR Y POP UP */}

      <div className="lg:hidden">
        <BottomBar />
      </div>

      <PopupMenu popupIsOpen={popupIsOpen} setpopupIsOpen={setpopupIsOpen} />
      {/* estamos diciendole al popupmenu cuales son sus props para luego aplicarlas */}

    </header>
  );
};

export default Header;

