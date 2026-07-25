import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

import CierrePopUp from "./CierrePopUp.jsx";
import ticketIcon from '../assets/img/icon/icon-ticket.svg';
import homeIcon from '../assets/img/icon/icon-home.svg';
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import userIcon from '../assets/img/icon/icon-user.svg';
import festivalIcon from '../assets/img/icon/icon-festival.svg';


const PopupMenu = ({ popupIsOpen, setpopupIsOpen }) => {
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const handleStart = (clientX, clientY) => {
        setIsDragging(true);
        setDragStart({
            x: clientX - posicion.x,
            y: clientY - posicion.y
        });
    };

    const handleMouseDown = (e) => handleStart(e.clientX, e.clientY);
    const handleTouchStart = (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY);

    useEffect(() => {
        if (popupIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [popupIsOpen]);
    
    useEffect(() => {
        const handleMove = (clientX, clientY) => {
            if (!isDragging) return;
            setPosicion({
                x: clientX - dragStart.x,
                y: clientY - dragStart.y
            });
        };

        const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
        const handleTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

        const handleEnd = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, dragStart]);
    return(
    <div className={`fixed top-0 left-0 w-full h-full z-999 lg:hidden ${popupIsOpen ? '' : 'hidden'}`}>
        <div className={`absolute w-full h-full bg-black opacity-60 z-999 ${popupIsOpen ? '' : 'hidden'}`} onClick={() => setpopupIsOpen(false)}>
        </div>
        <nav style={{ transform: `translate(${posicion.x}px, ${posicion.y}px)` }} className={`flex flex-col rounded-xl bg-pink absolute z-999 left-0 right-0 top-0 bottom-0 my-auto h-fit mx-auto w-fit ${popupIsOpen ? '' : 'hidden'}  `} >
            {/* el w-fit es lo que me ha dejado ponerlo en el centro pq se extendía */}
                <div 
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    className="cursor-grab active:cursor-grabbing select-none"
                >
                    <CierrePopUp setpopupIsOpen={setpopupIsOpen} />
                </div>
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
)}

export default PopupMenu;

/* TO DO: hacer que el pop up se pueda mover Y ARRASTRAR */