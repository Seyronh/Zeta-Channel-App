
import { useState } from "react";

import FormsInput from "../components/FormsInput.jsx";
import Btn from "../components/Btn.jsx";

import ojoIcon from '../assets/img/icon/icon-ojo.svg';
import ojoIconCerrado from '../assets/img/icon/icon-cerrado.svg';
import checkIcon from '../assets/img/icon/check-icon.svg';

const Registrarse = ({ setUserRegistrado, setUserIniciado, email, setEmail }) => {

    const [esVisible, setEsVisible] = useState(false);
    const [terminosAceptados, setTerminosAceptados] = useState(false);

    const emailValido = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const [password, setPassword] = useState('');
    const comprobarLongitud = (password) => {
        return password.length >= 8;
    }
    const comprobarMayuscula = (password) => {
        return /[A-Z]/.test(password);
    }
    const comprobarMinuscula = (password) => {
        return /[a-z]/.test(password);
    }
    const comprobarNumero = (password) => {
        return /\d/.test(password);
    }
    const comprobarCaracterEspecial = (password) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
    const comprobarCorreo = (password) => {
        return !password.includes(email);
    }
    const contraseñaValida = (comprobarLongitud(password) && comprobarMayuscula(password) && comprobarMinuscula(password) && comprobarNumero(password) && comprobarCaracterEspecial(password) && comprobarCorreo(password));
    const registroValido = emailValido(email) && contraseñaValida && terminosAceptados;
    return (
        <div className="relative">
            <div className="relative z-10 flex flex-col gap-6  md:mx-20 md:gap-10 lg:mx-82">
                <h2 className="text-xl font-sans font-bold uppercase text-black dark:text-white mb-4">Regístrate:</h2>

                <FormsInput
                    label="Correo Electrónico"
                    placeholder="ejemplo@gmail.com"
                    variant={email.length > 0 ? (emailValido(email) ? "correct" : "incorrect") : "bordered"}
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    icono={email.length > 0 ? (emailValido(email) ? checkIcon : null) : null}
                />

                <FormsInput
                    label="Contraseña"
                    placeholder="cReaTuContraseña.000"
                    variant={password.length > 0 ? (contraseñaValida ? "correct" : "incorrect") : "bordered"}
                    type={esVisible ? "text" : "password"}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    icono={esVisible ? ojoIconCerrado : ojoIcon}
                    onClickIcono={() => setEsVisible(!esVisible)}
                />

                <ul className="flex flex-col gap-2 mt-2 font-sans text-pretty">
                    <li className={`text-sm 
                    ${password.length === 0 && 'text-neutral-600 dark:text-gray-300'} 
                    ${comprobarLongitud(password) ? 'text-green-500' : (password.length>0 ? 'text-red-alert' : '')}`}> Al menos 8 caracteres
                    </li>

                    <li className={`text-sm
                    ${password.length === 0 && 'text-neutral-600 dark:text-gray-300'} 
                    ${comprobarCorreo(password) ? 'text-green-500' : (password.length>0 ? 'text-red-alert' : '')}`}>
                        No puede contener tu correo electrónico
                    </li>

                    <li className={`text-sm 
                    ${password.length === 0 && 'text-neutral-600 dark:text-gray-300'} 
                    ${(comprobarMayuscula(password) && comprobarMinuscula(password) && comprobarNumero(password) && comprobarCaracterEspecial(password)) ? 'text-green-500' : (password.length>0 ? 'text-red-alert' : '')}`}>
                        Al menos una mayúscula, minúscula, un signo y un número
                    </li>
                </ul>
                <FormsInput
                    label="Fecha de Nacimiento"
                    placeholder="dd/mm/aa"
                    variant="bordered"
                    type="date"
                    required
                />
                <div className="flex items-center justify-center gap-2">
                    <FormsInput
                        type="checkbox"
                        variant="bordered"
                        required
                        className="w-6 h-6 mb-3"
                        onChange={(e) => setTerminosAceptados(e.target.checked)}
                        value={terminosAceptados}
                    />
                    <p className="text-lg text-black">
                        Acepto los{' '}
                        <span className="text-blue-500 underline cursor-pointer">
                            términos y condiciones
                        </span>
                    </p>
                </div>
                <div className="lg:mx-30">
                    <Btn to="#" text="REGÍSTRATE" variant={registroValido ? 'solidgreen' : 'solidblack'} size='xs' font='sans' onClick={() => {
                        if(registroValido) setUserIniciado(true)
                    }} />
                </div>
                

                <div className="flex flex-col gap-2">
                    <p>¿Ya tienes cuenta?</p>
                    <div className="lg:mx-30">
                        <Btn to="#" text="Iniciar Sesión" variant='solidpink' size='xs' font='sans' className="w-full" onClick={() => setUserRegistrado(false)} /></div>
                </div>
            </div>

        </div>
    )
};
export default Registrarse;