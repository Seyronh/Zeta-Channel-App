import { useState } from 'react';

import FormsInput from '../components/FormsInput.jsx';
import Btn from '../components/Btn.jsx';

import ojoIcon from '../assets/img/icon/icon-ojo.svg';
import ojoIconCerrado from '../assets/img/icon/icon-cerrado.svg';
import checkIcon from '../assets/img/icon/check-icon.svg';

const IncioSesion = ({ setUserIniciado, setUserRegistrado }) => {

    const [email, setEmail] = useState('');
    const [esVisible, setEsVisible] = useState(false);

    const emailValido = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl font-sans font-bold uppercase text-black dark:text-white mb-4">Iniciar Sesión</h2>
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
                placeholder="pOnTuContraseña.000"
                variant={"bordered"}
                type={esVisible ? "text" : "password"}
                required
                icono={esVisible ? ojoIconCerrado : ojoIcon}
                onClickIcono={() => setEsVisible(!esVisible)}
            />
            <a href="#" className="text-black dark:text-white -mt-3 font-semibold font-sans hover:underline">¿Olvidaste tu contraseña?</a>
            <Btn to="#" text="INICIAR SESIÓN" variant='solidgreen' size='xs' font='sans' onClick={() => setUserIniciado(true)} />
            <p className="text-sm text-gray-600 dark:text-gray-300">
                Al continuar, aceptas las
                <span className="text-blue-500 hover:underline"> Condiciones de uso</span> y la
                <span className="text-blue-500 hover:underline"> Política de Privacidad</span> del festival
            </p>
            <div className="flex flex-col gap-2">
                <p className="text-black dark:text-white">
                    ¿No tienes una cuenta?
                </p>
                <Btn to="#" text="REGÍSTRATE" variant='solidpink' size='xs' font='sans' className="w-full" onClick={() => setUserRegistrado(true)} />
            </div>

        </div>
    );
};
export default IncioSesion;