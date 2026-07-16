import { Link } from "react-router-dom";

const Btn = ({
    text,
    to,
    variant = "solidgreen",
    font = "sans",
    size = "lg",
    estado,
    className = '', // <--- Aquí ya lo estabas recibiendo, ahora lo vamos a usar
    ...props
}) => {
    const baseStyles = 'flex items-center justify-center rounded-full cursor-pointer transition-colors uppercase px-3 py-1 text-center whitespace-nowrap w-full';
    /* Nota: He añadido 'w-full' por defecto al botón para que use todo el ancho que su contenedor padre le permita */

    const estadoStyles = {
        disponible: "outline-solid text-white",
        ultimasUnidades: "outline-dashed text-white",
        noDisponible: "bg-neutral-400 text-neutral-700",
    }

    const fontStyle = {
        sans: 'font-sans',
        pixel: 'font-pixel'
    }

    const sizeStyle = {
        lg: 'text-2xl',
        xs: 'text-base'
    }

    const variantStyles = {
        solidgreen: "bg-green text-black hover:bg-green-hover",
        outlinegreen: "ring-green ring-2 text-black hover:ring-green-hover",

        solidwhite: "bg-white text-black hover:bg-pix-light",
        outlinewhite: "ring-white hover:ring-pix-light",

        solidblack: "bg-black text-white hover:bg-pix-dark",
        outlineblack: "ring-black text-black hover:ring-pix-dark group-hover:ring-white group-hover:text-white",

        solidblue: "bg-blue text-black hover:bg-hover-blue group-hover:bg-pink",
        outlineblue: "ring-blue text-black hover:ring-blue-hover",

        /* TO DO: ARREGLAR CONTRASTE BTN AZUL */

        solidpink: "bg-pink text-black hover:bg-pink-hover",
        outlinepink: "ring-pink  text-black hover:ring-pink-hover",
    };

    const btnClass = `${baseStyles} ${fontStyle[font]} ${sizeStyle[size]} ${variantStyles[variant]} ${estado ? estadoStyles[estado] : ""}`;

    // Si pasas "w-full" por className, evitamos que "items-center" del contenedor colapse el botón.
    const containerClass = `flex flex-col items-center gap-4 ${className.includes('w-full') ? 'w-full' : ''} ${className}`;

    if (to) {
        return (
            <div className={containerClass}>
                <Link to={to} className={btnClass} {...props}>
                    {text}
                </Link>
                {estado === "ultimasUnidades" && (
                    <span className="text-xs font-bold uppercase tracking-tight mt-0.5 text-black dark:text-white">
                        ¡últimas plazas!
                    </span>
                )}
            </div>
        );
    }

    return (
        <div className={containerClass}>
            <button className={btnClass} {...props}>
                {text}
            </button>
            {estado === "ultimasUnidades" && (
                <span className="text-xs font-bold uppercase tracking-tight text-black dark:text-white">
                    ¡últimas plazas!
                </span>
            )}
        </div>
    )
}

export default Btn;