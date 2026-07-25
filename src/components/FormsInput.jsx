const FormsInput = ({ label, placeholder, variant = 'bordered', onClickIcono, icono, ...props }) => {

    const baseStyles = "w-full bg-white text-black text-lg placeholder:text-gray-500 border-2 rounded-xl px-4 py-2.5 transition-all outline-none border-2 focus:scale-101 font-sans";

    const variantStyles = {
        bordered: "border-black focus:border-blue dark:border-neutral-200",
        correct: "border-green focus:border-hover-green",
        incorrect: "border-red-500 focus:border-red-500"
    };



    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg text-black dark:text-white">{label}</label>
            <div className="relative">
                {icono && (
                    <img
                        src={icono}
                        alt="Icono"
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                        onClick={onClickIcono}
                    />
                )}
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`${baseStyles} ${variantStyles[variant]}`}
                    {...props}
                />
            </div>
        </div>
    )
};
export default FormsInput;