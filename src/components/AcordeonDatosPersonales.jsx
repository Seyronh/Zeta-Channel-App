import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import FormsInput from '../components/FormsInput.jsx';
import Btn from '../components/Btn.jsx';
import { useState } from 'react';

const AcordeonAgenda = ({ toggleSeccion, seccionActiva, irASiguiente, nombre, setNombre, fechaNacimiento, setFechaNacimiento, email, setEmail }) => {
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const validEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const EmailConfirmado = email === confirmarEmail;
    const valido = nombre.length > 0 && fechaNacimiento.length > 0 && validEmail(email) && EmailConfirmado && aceptaTerminos;
    return (<div className="mt-12 md:mt-14 md:px-2">
        <button
            onClick={() => toggleSeccion(3)}
            className="flex w-full items-center uppercase font-pixel text-2xl text-left md:text-3xl"
        >
            <span className="flex-1">3. Datos Personales</span>
            <img
                src={flechaDesplegable}
                alt=""
                aria-hidden="true"
                className={`h-6 w-6 transition-transform ${seccionActiva === 3 ? 'rotate-180' : ''}`}
            />
        </button>

        {seccionActiva === 3 && (
            <div className="mt-4 m">
                <ul className="flex flex-col text-black font-sans gap-8 mt-6 lg:mx-20">
                    <li>
                        <FormsInput
                            label="Nombre y Apellido"
                            placeholder="Mónica García"
                            variant="bordered"
                            type="text"
                            required
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                    </li>
                    <li>
                        <FormsInput
                            label="Fecha de Nacimiento"
                            placeholder="dd/mm/aaaa"
                            variant="bordered"
                            type="date"
                            required
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                            value={fechaNacimiento}
                        />
                    </li>
                    <li>
                        <FormsInput
                            label="Email"
                            placeholder="ejemplo@example.com"
                            variant={email.length > 0 ? (validEmail(email) ? "correct" : "incorrect") : "bordered"}
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </li>
                    <li>
                        <FormsInput
                            label="Confirma tu Email"
                            placeholder="ejemplo@example.com"
                            variant={email.length > 0 ? (EmailConfirmado ? "correct" : "incorrect") : "bordered"}
                            type="email"
                            required
                            onChange={(e) => setConfirmarEmail(e.target.value)}
                            value={confirmarEmail}
                        />
                    </li>
                    <li className="flex gap-2 items-center justify-center w-full">
                        <FormsInput
                            type="checkbox"
                            variant="bordered"
                            required
                            className="w-6 h-6 mb-3"
                            onChange={(e) => setAceptaTerminos(e.target.checked)}
                            value={aceptaTerminos}
                        />
                        <p className="text-lg text-black">
                            Acepto los{' '}
                            <span className="text-blue-500 underline cursor-pointer">
                                términos y condiciones
                            </span>
                        </p>
                    </li>
                    <li>
                        <Btn to="#" type="button" text="Siguiente" variant={valido ? 'solidgreen' : 'solidblack'} size='xs' font='sans' onClick={() => { if(valido) irASiguiente(4) }} className=" lg:mx-75" />
                    </li>
                </ul>
            </div>
        )}
    </div>)
};
export default AcordeonAgenda;