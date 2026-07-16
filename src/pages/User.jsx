import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import InicioSesion from '../components/InicioSesion.jsx';
import TextoUser from '../components/TextoUser.jsx';
import Registrarse from '../components/Registrarse.jsx';
import CierrePopUp from '../components/CierrePopUp.jsx';
import Btn from '../components/Btn.jsx';
import GridSeleccionados from '../components/GridSeleccionados.jsx';

import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import IconoUsuario from '../assets/img/icon/icon-user.svg';
import IconoRegistrarse from '../assets/img/icon/icon-registrarse.svg';
import { Pix4 } from '../components/Pixel.jsx';

const User = () => {

    const [userRegistrado, setUserRegistrado] = useState(false);
    const [userIniciado, setUserIniciado] = useState(false);

    return (

        <div className={`pt-23 px-6 pb-6 ${userIniciado && ('bg-pix-light dark:bg-pix-dark')}`}>
            <Pix4 className={`absolute top-13 right-0 w-40 h-40 text-pix-light dark:text-pix-dark ${userIniciado && ('text-white')}`} />
            <div className="relative flex items-center gap-6 justify-center mb-12">
                {!userIniciado && (
                    <img src={IconoUsuario} alt="Icono de Usuario" className="w-11 h-11 dark:invert" />

                )}
                {userIniciado && (
                    <img src={IconoRegistrarse} alt="Icono de Usuario" className="w-11 h-11 dark:invert" />
                )}

                <h1 className="text-5xl leading-0 font-pixel uppercase text-black dark:text-white">user</h1>
            </div>
            {!userIniciado && (
                <>
                    {userRegistrado ? (
                        <Registrarse setUserRegistrado={setUserRegistrado} setUserIniciado={setUserIniciado} />
                    ) : (
                        <InicioSesion setUserIniciado={setUserIniciado} setUserRegistrado={setUserRegistrado} />
                    )}
                    <TextoUser />
                </>)}
            {userIniciado && (
                <div className="relative bg-pix-light dark:bg-pix-dark text-center">
                    <h3 className="text-2xl uppercase text-black dark:text-white font-pixel">Bienvenido de nuevo
                    </h3>
                    <h2 className="text-3xl uppercase text-black dark:text-white font-pixel mb-8"> Usuario
                    </h2>

                    <CierrePopUp text="Tu cuenta" className="bg-blue" />
                    <ul className="flex flex-col gap-4 text-black dark:text-white font-sans bg-white px-3">
                        <li><Disclosure as="div" className="py-3" defaultOpen={true}>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="flex justify-between w-full text-left pb-2">
                                        <span className="font-pixel text-xl uppercase text-black dark:text-white">Perfil</span>
                                        <img
                                            src={flechaDesplegable}
                                            alt="btn desplegar"
                                            className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">
                                        <li className="flex flex-col gap-4">
                                            <div className="flex justify-between">
                                                <p className="font-semibold text-black text-lg">Detalles personales</p>
                                                <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' onClick={() => { }} />
                                            </div>
                                            <div className="flex justify-between text-black">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-black text-start">Juanlu Molina Ruiz</p>
                                                    <p className="text-black text-start">juanlu@lahauss.com</p>
                                                </div>
                                                <p className="text-black">02/02/02</p>
                                            </div>
                                        </li>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure></li>
                        <li className="flex flex-col gap-4 mt-6">
                            <div className="flex justify-between">
                                <p className="font-semibold text-black text-lg ">Agenda</p>
                                <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' />
                            </div>
                            <div className="flex flex-col gap-6 text-black items-center">
                                <p className="text-black mt-3">Autocine Madrid - C. Isla de Java, 2</p>
                                {seleccionadosViernes.length > 0 && <p className="text-black font-bold text-xl mt-3">Viernes 13 SEP</p>}

                                <GridSeleccionados Seleccionados={seleccionadosViernes} />
                                {seleccionadosSabado.length > 0 && <p className="text-black font-bold text-xl mt-6">Sábado 14 SEP</p>}
                                <GridSeleccionados Seleccionados={seleccionadosSabado} />
                                {seleccionadosDomingo.length > 0 && <p className="text-black font-bold text-xl mt-6">Domingo 15 SEP</p>}
                                <GridSeleccionados Seleccionados={seleccionadosDomingo} />
                            </div>
                        </li>

                    </ul>


                </div>

            )
            }
        </div>
    );
}

export default User;