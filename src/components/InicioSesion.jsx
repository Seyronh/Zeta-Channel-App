import { useState } from 'react';

import FormsInput from '../components/FormsInput.jsx';
import Btn from '../components/Btn.jsx';

import ojoIcon from '../assets/img/icon/icon-ojo.svg';
import ojoIconCerrado from '../assets/img/icon/icon-cerrado.svg';
import checkIcon from '../assets/img/icon/check-icon.svg';

const IncioSesion = () => {

    const [email, setEmail] = useState('');
    const [esVisible, setEsVisible] = useState(false);

    const emailValido = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    return (
        < div className="flex flex-col gap-4">
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
            <a href="#" className="text-black -mt-1 font-semibold font-sans hover:underline">¿Olvidaste tu contraseña?</a>
            <Btn to="#" text="INICIAR SESIÓN" variant='solidgreen' size='xs' font='sans' />
            <p className="text-sm text-gray-600">
                Al continuar, aceptas las
                <span className="text-blue-500 hover:underline">Condiciones de uso</span> y la
                <span className="text-blue-500 hover:underline">Política de Privacidad</span> del festival
            </p>
            <div>
                <p>¿No tienes una cuenta?</p>
                <Btn to="#" text="REGÍSTRATE" variant='solidpink' size='xs' font='sans' />
            </div>
            <div className="bg-black h-0.5 w-full mt-8"></div>
            <div className="my-3">
                <h2 className="text-2xl uppercase text-balance text-center text-black font-pixel dark:text-white my-4">Es mucho mejor cuando tienes cuenta porque...</h2>
                <ul className="flex flex-col gap-6 mt-8 text-black dark:text-white font-sans text-pretty">
                    <li className="flex flex-col gap-2">
                        <h3 className="font-semibold">Agenda Personal</h3>
                        <p>Organiza tus reservas y actividades sin preocuparte de nada.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h3 className="font-semibold">Tus Entradas</h3>
                        <p>Acceso inmediato a tus tickets y reservas. Olvídate de buscar en el email.</p>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h3 className="font-semibold">Descuentos VIP</h3>
                        <p>Ahorra con ofertas exclusivas solo para usuarios registrados.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default IncioSesion;