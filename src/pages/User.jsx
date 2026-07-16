import InicioSesion from '../components/InicioSesion.jsx';

import IconoUsuario from '../assets/img/icon/icon-user.svg';
import { Pix4 } from '../components/Pixel.jsx';

const User = () => (

    <div className="pt-23 px-6 pb-6">
        <Pix4 className="absolute top-13 right-0 w-40 h-40 text-pix-light dark:text-pix-dark" />
        <div className="relative flex items-center gap-6 justify-center mb-12">
            <img src={IconoUsuario} alt="Icono de Usuario" className="w-11 h-11 dark:invert" />
            <h1 className="text-5xl leading-0 font-pixel uppercase text-black dark:text-white">user</h1>

        </div>
        <h2 className="text-xl font-sans font-bold uppercase text-black dark:text-white mb-4">Inicia Sesión:</h2>
        <InicioSesion />
    </div>



);

export default User;