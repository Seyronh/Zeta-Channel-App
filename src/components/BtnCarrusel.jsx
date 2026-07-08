import { useCallback, useEffect, useState } from 'react'
import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';

const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        // eslint-disable-next-line react-hooks/set-state-in-effect
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

const PrevButton = (props) => {
    const { children, disabled, ...restProps } = props

    return (
        <button
            className={'embla__button embla__button--prev'.concat(
                disabled ? ' embla__button--disabled' : ''
            )}
            type="button"
            {...restProps}
        >
            <img src={flechaDesplegable} alt="Botón anterior" className="bg-green rounded-full p-2 rotate-90" />
            {children}
        </button>
    )
}

const NextButton = (props) => {
    const { children, disabled, ...restProps } = props

    return (
        <button
            className={'embla__button embla__button--next'.concat(
                disabled ? ' embla__button--disabled' : ''
            )}
            type="button"
            {...restProps}
        >
            <img src={flechaDesplegable} alt="Botón siguiente" className="bg-green rounded-full p-2 rotate-270" />
            {children}
        </button>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export { usePrevNextButtons, PrevButton, NextButton };
