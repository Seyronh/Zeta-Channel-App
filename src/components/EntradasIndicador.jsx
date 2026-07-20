import iconPlus from '../assets/img/icon/icon-plus.svg';
import iconMenos from '../assets/img/icon/icon-menos.svg';

const EntradasIndicador = ({ entrada, setEntrada, desactivado }) => {

    return (
        <div className="flex items-center gap-5 py-1.5">
            <button

                className={`flex items-center text-center cursor-pointer p-2 rounded-full ${entrada === 0 || desactivado ? 'bg-grey cursor-not-allowed' : 'bg-pink hover:bg-pink-hover'}`}
                onClick={() => setEntrada(Math.max(0, entrada - 1))}
                disabled={desactivado}
            >
                <img src={iconMenos} alt="Menos" className="w-4 h-4 inline-block" />
            </button>
            <span className="font-sans font-medium text-2xl text-black w-4 text-center">{entrada}</span>
            <button
                className={`flex items-center text-center cursor-pointer p-2 rounded-full ${entrada === 9 || desactivado ? 'bg-grey cursor-not-allowed' : 'bg-pink hover:bg-pink-hover'}`}
                onClick={() => setEntrada(Math.min(9, entrada + 1))}
                disabled={desactivado}
            >
                <img src={iconPlus} alt="Más" className="w-4 h-4 inline-block" />
            </button>
        </div>
    )
};
export default EntradasIndicador;