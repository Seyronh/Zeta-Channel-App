import { useState } from 'react';

import FormsInput from '../components/FormsInput.jsx';
import Btn from '../components/Btn.jsx';

import ojoIcon from '../assets/img/icon/icon-ojo.svg';
import ojoIconCerrado from '../assets/img/icon/icon-cerrado.svg';
import checkIcon from '../assets/img/icon/check-icon.svg';

const InicioSesion = ({ setUserIniciado, setUserRegistrado, email, setEmail }) => {

    const [esVisible, setEsVisible] = useState(false);
    const [password, setPassword] = useState('');

    const emailValido = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const loginValido = emailValido(email) && password.length>0;
    return (
        <div className="relative">
            <div className="relative z-10 flex flex-col gap-6 md:mx-20 md:gap-10 lg:mx-82">
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <a href="#" className="text-black dark:text-white -mt-3 font-semibold font-sans hover:underline">¿Olvidaste tu contraseña?</a>
                <div className="lg:mx-30">
                    <Btn to="#" text="INICIAR SESIÓN" variant={loginValido ? 'solidgreen' : 'solidblack'} size='xs' font='sans' onClick={() => {
                        if(loginValido)
                        setUserIniciado(true)
                        }} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Al continuar, aceptas las
                    <span className="text-blue-500 hover:underline"> Condiciones de uso</span> y la
                    <span className="text-blue-500 hover:underline"> Política de Privacidad</span> del festival
                </p>
                <div className="flex flex-col gap-2">
                    <p className="text-black dark:text-white">
                        ¿No tienes una cuenta?
                    </p>
                    <div className="lg:mx-30">
                        <Btn to="#" text="REGÍSTRATE" variant='solidpink' size='xs' font='sans' className="w-full" onClick={() => setUserRegistrado(true)} />
                    </div>
                </div>

            </div>


        </div>
    );
};
export default InicioSesion;