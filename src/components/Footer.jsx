import { Link } from "react-router-dom";

import iconIg from '../assets/img/icon/icon-ig.svg';
import iconTiktok from '../assets/img/icon/icon-tiktok.svg';
//import logoZeta from '../assets/img/logo-zeta-channel.svg';
import LogoZetaInteractivo from "./LogoZetaInteractivo";

const Footer = () => (
    <footer className="bg-pix-light dark:bg-pix-dark relative z-20 pt-12 flex flex-col gap-6 items-center justify-center text-center -mt-1 mb-9 lg:mb-0 lg:px-140 ">

        <div className="text-black dark:text-white">
            <h1 className="text-3xl font-bold font-sans lg:text-5xl">Zeta Channel</h1>
            <p className="font-pixel lg:text-2xl">Reviviendo la magia que nos hizo crecer</p>
        </div>
        <ul className="uppercase text-black dark:text-white text-xl flex flex-wrap gap-6 justify-center font-pixel px-8 lg:text-2xl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Tickets">Tickets</Link></li>
            <li><Link to="/Cartelera">Cartelera</Link></li>
            <li><Link to="/Agenda">Agenda</Link></li>
            <li><Link to="/Festival">festival</Link></li>
            <li><Link to="/User">user</Link></li>
        </ul>
        <ul className="flex gap-6 border-y-2 border-black dark:border-white p-6 lg:w-full lg:justify-center lg:gap-12">
            <li className="flex gap-2 text-lg text-black dark:text-white font-pixel lg:text-2xl">
                <img src={iconTiktok} alt="icono Tiktok" className="dark:invert" />
                <a href="#" rel="noopener noreferrer" target="_blank">Tiktok</a>
            </li>
            <li className="flex gap-2 text-lg text-black dark:text-white font-pixel lg:text-2xl">
                <img src={iconIg} alt="icono Instagram" className="dark:invert" />
                <a href="#" rel="noopener noreferrer" target="_blank">Instagram</a>
            </li>
        </ul>
        <p className="flex flex-col text-black dark:text-white text-sm lg:text-lg">
            <span>Politica de privacidad y aviso legal.</span>
            <span>©Zeta Channel, 2026</span>
        </p>
        <LogoZetaInteractivo />
    </footer>
);

export default Footer;

/* HACER QUE EL LOGO LOS OJOS SIGAN EL RATON Y EN EL MOVIL Y TABLET SE MUEVAN ALEATORIAMENTE*/
/*<img src={logoZeta} alt="Logo Zeta Channel" className="w-60 h-60 lg:h-auto" />*/