import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import FormsInput from '../components/FormsInput.jsx';
import Btn from '../components/Btn.jsx';


const AcordeonAgenda = ({ toggleSeccion, seccionActiva, irASiguiente }) => (
    <div className="mt-12">
        <button
            onClick={() => toggleSeccion(3)}
            className="flex w-full items-center uppercase font-pixel text-2xl text-left"
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
            <div className="mt-4">
                <ul className="flex flex-col text-black font-sans gap-8 mt-6">
                    <li>
                        <FormsInput
                            label="Nombre y Apellido"
                            placeholder="Mónica García"
                            variant="bordered"
                            type="text"
                            required
                        />
                    </li>
                    <li>
                        <FormsInput
                            label="Fecha de Nacimiento"
                            placeholder="dd/mm/aaaa"
                            variant="bordered"
                            type="date"
                            required
                        />
                    </li>
                    <li>
                        <FormsInput
                            label="Email"
                            placeholder="ejemplo@example.com"
                            variant="bordered"
                            type="email"
                            required
                        />
                    </li>
                    <li>
                        <FormsInput
                            label="Email"
                            placeholder="ejemplo@example.com"
                            variant="bordered"
                            type="email"
                            required
                        />
                    </li>
                    <li className="flex gap-2 items-center justify-center w-full">
                        <FormsInput
                            type="checkbox"
                            variant="bordered"
                            required
                            className="w-6 h-6 mb-3"
                        />
                        <p className="text-lg text-black">
                            Acepto los{' '}
                            <span className="text-blue-500 underline cursor-pointer">
                                términos y condiciones
                            </span>
                        </p>
                    </li>
                    <li>
                        <Btn to="#" type="button" text="Siguiente" variant='solidgreen' size='xs' font='sans' onClick={() => irASiguiente(4)} />
                    </li>
                </ul>
            </div>
        )}
    </div>
);
export default AcordeonAgenda;