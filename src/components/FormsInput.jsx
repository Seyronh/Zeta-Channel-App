const FormsInput = ({ label, placeholder, variant = 'bordered', ...props }) => {

    const baseStyles = "w-full bg-white text-black text-lg placeholder:text-gray-500 border-2 rounded-xl px-4 py-2.5 transition-all outline-none border-2 focus:scale-101 font-sans";

    const variantStyles = {
        bordered: "border-black focus:border-blue",
        correct: "border-green focus:border-hover-green",
        incorrect: "border-red focus:border-red-500"
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg text-black">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className={`${baseStyles} ${variantStyles[variant]}`}
                {...props}
            />
        </div>
    )
};
export default FormsInput;