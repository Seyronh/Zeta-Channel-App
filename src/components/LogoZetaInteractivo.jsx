import { useEffect, useRef } from "react";

export default function LogoZetaInteractivo() {
    // Referencias a las pupilas y al contenedor del SVG
    const ojoIzquierdoRef = useRef(null);
    const ojoDerechoRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        // Posiciones iniciales de los centros de las pupilas dentro del SVG
        const centroIzquierdo = { x: 150, y: 140.5 };
        const centroDerecho = { x: 223, y: 167.5 };

        // Radio máximo de movimiento permitido antes de que la pupila "salga" del ojo
        const radioMaximo = 25;

        const handleMouseMove = (e) => {
            if (!svgRef.current) return;

            // Obtenemos la posición real del SVG en la pantalla
            const rect = svgRef.current.getBoundingClientRect();

            // Convertimos las coordenadas del ratón a espacio de coordenadas relativo al SVG
            // Tomando en cuenta que el viewBox original mide 378x272
            const escalaX = 378 / rect.width;
            const escalaY = 272 / rect.height;
            const mouseX = (e.clientX - rect.left) * escalaX;
            const mouseY = (e.clientY - rect.top) * escalaY;

            // Función interna para calcular el nuevo centro de cada pupila
            const calcularMovimientoOjo = (centro) => {
                const deltaX = mouseX - centro.x;
                const deltaY = mouseY - centro.y;
                const distancia = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                // Si el ratón está muy lejos, limitamos el movimiento al radio máximo
                if (distancia > radioMaximo) {
                    const angulo = Math.atan2(deltaY, deltaX);
                    return {
                        x: centro.x + Math.cos(angulo) * radioMaximo,
                        y: centro.y + Math.sin(angulo) * radioMaximo,
                    };
                }

                // Si está cerca, la pupila sigue exactamente la posición del ratón
                return { x: centro.x + deltaX, y: centro.y + deltaY };
            };

            // Calculamos las nuevas posiciones
            const nuevoIzquierdo = calcularMovimientoOjo(centroIzquierdo);
            const nuevoDerecho = calcularMovimientoOjo(centroDerecho);

            // Modificamos el DOM directamente para no forzar re-renders en React
            if (ojoIzquierdoRef.current) {
                ojoIzquierdoRef.current.setAttribute("cx", nuevoIzquierdo.x);
                ojoIzquierdoRef.current.setAttribute("cy", nuevoIzquierdo.y);
            }
            if (ojoDerechoRef.current) {
                ojoDerechoRef.current.setAttribute("cx", nuevoDerecho.x);
                ojoDerechoRef.current.setAttribute("cy", nuevoDerecho.y);
            }
        };

        // Escuchamos el movimiento en toda la ventana
        window.addEventListener("mousemove", handleMouseMove);

        // Limpieza del evento al desmontar el componente
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            className="w-60 h-60 lg:h-auto" // Mantenemos tus clases de Tailwind
            viewBox="0 0 378 272"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

        >
            {/* Fondo azul */}
            <path
                d="M16.9551 46.1133C39.9552 6.11334 102.5 -16.9345 151.5 15.0655C198.557 45.7966 205.1 96.5765 180.682 138.065C195.507 140.879 205.262 143.39 216.097 149.198C214.318 130.482 220.02 109.558 234.854 94.3399C257.817 70.7832 313.28 61.8387 354.844 110.475C398.829 161.945 376.675 241.973 299.862 235.035C304.552 249.072 306.636 257.958 307.301 271.962H20.7246C20.7166 271.882 15.2446 216.942 43.2246 189.962C-12.7757 149.198 -6.04504 86.1134 16.9551 46.1133Z"
                fill="#3467F2"
            />

            {/* Escleróticas (El fondo blanco de los ojos) */}
            <circle cx="139" cy="139" r="57" fill="#F3F3F3" />
            <circle cx="229" cy="187" r="57" fill="#F3F3F3" />

            {/* Pupilas (Los círculos negros vinculados a las refs) */}
            <circle ref={ojoIzquierdoRef} cx="150" cy="140.5" r="20.5" fill="#010101" />
            <circle ref={ojoDerechoRef} cx="223" cy="167.5" r="20.5" fill="#010101" />
        </svg>
    );
}