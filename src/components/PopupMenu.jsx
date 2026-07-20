import { Link } from "react-router-dom";

import CierrePopUp from "./CierrePopUp.jsx";
import ticketIcon from '../assets/img/icon/icon-ticket.svg';
import homeIcon from '../assets/img/icon/icon-home.svg';
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import userIcon from '../assets/img/icon/icon-user.svg';
import festivalIcon from '../assets/img/icon/icon-festival.svg';


const PopupMenu = ({ popupIsOpen, setpopupIsOpen }) => (
    <div className={`fixed top-0 left-0 w-full h-full z-999 lg:hidden ${popupIsOpen ? '' : 'hidden'}`}>
        <div className={`absolute w-full h-full bg-black opacity-60 z-999 ${popupIsOpen ? '' : 'hidden'}`} onClick={() => setpopupIsOpen(false)}>
        </div>
        <nav className={`flex flex-col rounded-xl bg-pink absolute z-999 left-0 right-0 top-0 bottom-0 my-auto h-fit mx-auto w-fit ${popupIsOpen ? '' : 'hidden'}  `} >
            {/* el w-fit es lo que me ha dejado ponerlo en el centro pq se extendía */}

            <CierrePopUp setpopupIsOpen={setpopupIsOpen} />
            <ul className="flex flex-col gap-6 p-6 text-2xl font-pixel px-15 md:flex-row md:gap-25">
                <ul className="flex flex-col gap-6">
                    <li>
                        <Link to="/" onClick={() => setpopupIsOpen(false)} className="flex gap-6">
                            <img src={homeIcon} alt="Home" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                            <span className="uppercase text-[calc(1.5rem+0.5vw)]">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Tickets" onClick={() => setpopupIsOpen(false)} className="flex gap-6">
                            <img src={ticketIcon} alt="Tickets" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                            <span className="uppercase text-[calc(1.5rem+0.5vw)]">Tickets</span>
                        </Link></li>
                    <li>
                        <Link to="/Cartelera" onClick={() => setpopupIsOpen(false)} className="flex gap-6">
                            <img src={carteleraIcon} alt="Cartelera" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                            <span className="uppercase text-[calc(1.5rem+0.5vw)]">Cartelera</span>
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col gap-6">
                    <li>
                        <Link to="/Festival" onClick={() => setpopupIsOpen(false)} className="flex gap-6">
                            <img src={festivalIcon} alt="Festival" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                            <span className="uppercase text-[calc(1.5rem+0.5vw)]">Festival</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Agenda" onClick={() => setpopupIsOpen(false)} className="flex gap-6">
                            <img src={agendaIcon} alt="Agenda" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                            <span className="uppercase text-[calc(1.5rem+0.5vw)]">Agenda</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/User" onClick={() => setpopupIsOpen(false)} className="flex gap-6">
                            <img src={userIcon} alt="User" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                            <span className="uppercase text-[calc(1.5rem+0.5vw)]">User</span>
                        </Link>
                    </li>
                </ul>
            </ul>
        </nav >
    </div>
)

export default PopupMenu;

/* TO DO: hacer que el pop up se pueda mover Y ARRASTRAR */