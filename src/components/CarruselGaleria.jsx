import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from "../data/usePrevNextButtons.js";
import { PrevButton, NextButton } from "./BtnCarrusel.jsx";
import { useCarruselIndicadores } from "../data/useCarruselIndicadores.js";
import { DotButton } from "../components/CarruselIndicadores.jsx";

const CarruselGaleria = ({ imagenesGaleria }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true, slidesToScroll:"auto" })

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useCarruselIndicadores(emblaApi)

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6 lg:gap-10 touch-pan-y touch-pinch-zoom">
                    {/* esto es para cuando le des con el dedo arrastrar o agrandar */}
                    {imagenesGaleria.map((imagen, posicion) => (
                        <div className="shrink-0 grow-0 basis-full min-w-0 pl-6 lg:basis-[40%] lg:first:basis-[40%] first:basis-[85%]" key={posicion}>
                            <div className="w-full h-full overflow-hidden rounded-xl relative bg-olive-300">
                                <img
                                    src={imagen}
                                    alt={`Slide ${posicion + 1}`}
                                    // El object-cover ahora recortará la foto de forma inteligente adaptándose 
                                    // al nuevo ancho de la primera diapositiva sin estirarla ni pixelarla.
                                    className="w-full h-full object-cover object-center will-change-transform transform translate-z-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional: Add navigation controls here */}
            <div className="absolute bottom-0 top-0 left-0 right-0 flex  justify-between mx-3 mb-6 md:mx-10 pointer-events-none">
                <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
                <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
            </div>
            <div className="flex justify-center gap-3 mt-6">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className="w-4 h-4">
                        <div className={`w-full h-full rounded-full ${index === selectedIndex ? 'bg-green' : 'bg-black opacity-50'}`}></div>
                    </DotButton>
                ))}
            </div>
        </div>
    )
};

export default CarruselGaleria;