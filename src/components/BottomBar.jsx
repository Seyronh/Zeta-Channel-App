import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ticketIcon from '../assets/img/icon/icon-ticket.svg';
import homeIcon from '../assets/img/icon/icon-home.svg';
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import userIcon from '../assets/img/icon/icon-user.svg';
import festivalIcon from '../assets/img/icon/icon-festival.svg';


const BottomBar = () => {

    const { pathname } = useLocation();

    return (
        <div className="flex items-center justify-center fixed bottom-0 left-0 w-full bg-dark dark:bg-neutral-200 text-white dark:text-black z-998 lg:relative lg:bottom-auto lg:left-auto lg:w-auto lg:bg-transparent lg:dark:bg-transparent lg:text-black lg:dark:text-white">
            {/* Móvil/Tablet - barra fija abajo con fondo y PC se vuelve estático, sin fondos fijos */}
            <nav className="w-full lg:w-auto pt-0.5">
                <ul className="flex justify-around items-center w-full gap-3 py-3 font-pixel md:gap-6 lg:justify-start lg:gap-8 lg:py-0">

                    {/* HOME: Solo se ve en Móvil */}
                    <li className="order-3 w-[63px] lg:hidden">
                        <Link to="/" className="flex flex-col items-center justify-center gap-1">
                            <img src={homeIcon} alt="Home" className="invert dark:invert-0 w-6 h-6" />
                            <span className={`text-xs border-b-2 ${pathname === '/' ? 'border-white dark:border-black' : 'border-transparent'}`}>HOME</span>
                        </Link>
                    </li>

                    {/* FESTIVAL: Solo se ve en PC (lg:) */}
                    <li className="hidden lg:block lg:w-auto order-3">
                        <Link to="/Festival" className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:items-center lg:gap-3">
                            <img src={festivalIcon} alt="Festival" className="invert dark:invert-0 w-9 h-9 lg:invert-0 lg:dark:invert mb-1" />
                            <span className={`text-xs border-b-2 lg:text-2xl lg:border-b-3 ${pathname === '/Festival' ? 'border-white dark:border-black lg:border-black lg:dark:border-white' : 'border-transparent'}`}>FESTIVAL</span>
                        </Link>
                    </li>

                    {/* TICKETS */}
                    <li className="order-1 w-[63px] lg:hidden">
                        <Link to="/Tickets" className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:items-center lg:gap-3">
                            <img src={ticketIcon} alt="Tickets" className="invert dark:invert-0 w-6 h-6 lg:invert-0 lg:dark:invert lg:w-9 lg:h-9" />
                            <span className={`text-xs border-b-2 lg:text-2xl lg:border-b-3 ${pathname === '/Tickets' ? 'border-white dark:border-black lg:border-black lg:dark:border-white' : 'border-transparent'}`}>TICKETS</span>
                        </Link>
                    </li>

                    {/* CARTELERA */}
                    <li className="order-2 w-[63px] lg:w-auto">
                        <Link to="/Cartelera" className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:items-center lg:gap-3">
                            <img src={carteleraIcon} alt="Cartelera" className="invert dark:invert-0 w-6 h-6 lg:invert-0 lg:dark:invert lg:w-8 lg:h-8 lg:mb-1" />
                            <span className={`text-xs border-b-2 lg:text-2xl lg:border-b-3 ${pathname === '/Cartelera' ? 'border-white dark:border-black lg:border-black lg:dark:border-white' : 'border-transparent'}`}>CARTELERA</span>
                        </Link>
                    </li>

                    {/* AGENDA */}
                    <li className="order-4 w-[63px] lg:w-auto   ">
                        <Link to="/Agenda" className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:items-center lg:gap-3">
                            <img src={agendaIcon} alt="Agenda" className="invert dark:invert-0 w-6 h-6 lg:invert-0 lg:dark:invert lg:w-8 lg:h-8 lg:mb-1" />
                            <span className={`text-xs border-b-2 lg:text-2xl lg:border-b-3 ${pathname === '/Agenda' ? 'border-white dark:border-black lg:border-black lg:dark:border-white' : 'border-transparent'}`}>AGENDA</span>
                        </Link>
                    </li>

                    {/* USER */}
                    <li className="order-5 w-[63px] lg:w-auto">
                        <Link to="/User" className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:items-center lg:gap-3">
                            <img src={userIcon} alt="User" className="invert dark:invert-0 w-6 h-6 lg:invert-0 lg:dark:invert lg:w-8 lg:h-8 lg:mb-1" />
                            <span className={`text-xs border-b-2 lg:text-2xl lg:border-b-3 ${pathname === '/User' ? 'border-white dark:border-black lg:border-black lg:dark:border-white' : 'border-transparent'}`}>USER</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default BottomBar;
