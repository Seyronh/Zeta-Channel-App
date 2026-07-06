import { Link } from "react-router-dom";

const Btn = ({
    text,
    to,
    variant = "solidgreen",
    font = "sans",
    size = "lg",
    ...props
}) => {
    const baseStyles = 'flex item-center justify-center rounded-full cursor-pointer transition-colors uppercase px-3 py-1 text-center whitespace-nowrap ';
    /* estilo base de todas las variantes */

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
        outlinegreen: "ring-2 ring-green ring-inset text-black hover:border-green-hover",

        solidwhite: "bg-white text-black hover:bg-pix-light",
        outlinewhite: "ring-2 ring-white ring-inset text-white hover:border-pix-light",

        solidblack: "bg-black text-white hover:bg-pix-dark",
        outlineblack: "ring-2 ring-black ring-inset text-black hover:border-pix-dark group-hover:ring-white group-hover:text-white",

        solidgrey: "bg-neutral-400 text-neutral-700",

        solidblue: "bg-blue text-black hover:bg-hover-blue group-hover:bg-pink",
        outlineblue: "ring-2 ring-blue ring-inset text-black hover:border-blue-hover",

        /* TO DO: ARREGLAR CONTRASTE BTN AZUL */

        solidpink: "bg-pink text-black hover:bg-pink-hover",
        outlinepink: "ring-2 ring-pink ring-inset text-black hover:border-pink-hover",
    };

    const btnClass = `${baseStyles} ${fontStyle[font]} ${sizeStyle[size]} ${variantStyles[variant]}`;

    if (to) {
        return (
            <Link to={to} className={btnClass} {...props}>
                {text}
            </Link>
        );
    }

    return (
        <button className={btnClass} {...props}>
            {text}
        </button>
    )

}
export default Btn;