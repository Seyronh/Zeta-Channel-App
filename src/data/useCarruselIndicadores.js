import { useCallback, useEffect, useState } from 'react'

export const useCarruselIndicadores = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const onDotButtonClick = useCallback(
        (index) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    // El useEffect corregido y optimizado para evitar bucles infinitos
    useEffect(() => {
        if (!emblaApi) return

        // eslint-disable-next-line react-hooks/set-state-in-effect
        onInit(emblaApi)
        onSelect(emblaApi)

        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)

        return () => {
            if (emblaApi.off) {
                emblaApi.off('reInit', onInit)
                emblaApi.off('reInit', onSelect)
                emblaApi.off('select', onSelect)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emblaApi]) // <-- Solo vigila emblaApi

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}