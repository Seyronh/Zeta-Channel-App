import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';

export const PrevButton = (props) => {
    const { children, disabled, ...restProps } = props;
    return (
        <button
            className={'embla__button pointer-events-auto embla__button--prev'.concat(
                disabled ? ' embla__button--disabled' : ''
            )}
            type="button"
            {...restProps}
        >
            <img src={flechaDesplegable} alt="Botón anterior" className="bg-green rounded-full p-2 rotate-90" />
            {children}
        </button>
    );
};

export const NextButton = (props) => {
    const { children, disabled, ...restProps } = props;
    return (
        <button
            className={'embla__button pointer-events-auto embla__button--next'.concat(
                disabled ? ' embla__button--disabled' : ''
            )}
            type="button"
            {...restProps}
        >
            <img src={flechaDesplegable} alt="Botón siguiente" className="bg-green rounded-full p-2 rotate-270" />
            {children}
        </button>
    );
};