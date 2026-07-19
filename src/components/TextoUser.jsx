
const TextoUser = () => (
    <ul className="mb-4">
        <li className="bg-black h-0.5 w-full my-12"></li>
        <li>
            <h2 className="text-2xl uppercase text-balance text-center text-black font-pixel dark:text-white my-4">Es mucho mejor cuando tienes cuenta porque...</h2>
            <ul className="flex flex-col gap-8 pt-8 text-black dark:text-white font-sans text-pretty md:grid md:grid-cols-2 md:gap-10 md:mx-30">
                <li className="flex flex-col gap-2">
                    <h3 className="font-semibold">Agenda Personal</h3>
                    <p className="md:text-balance">Organiza tus reservas y actividades sin preocuparte de nada.</p>
                </li>
                <li className="flex flex-col gap-2">
                    <h3 className="font-semibold">Tus Entradas</h3>
                    <p className="md:text-balance">Acceso inmediato a tus tickets y reservas. Olvídate de buscar en el email.</p>
                </li>
                <li className="flex flex-col gap-2">
                    <h3 className="font-semibold">Descuentos VIP</h3>
                    <p className="md:text-balance">Ahorra con ofertas exclusivas solo para usuarios registrados.</p>
                </li>
            </ul>
        </li>
    </ul>
);
export default TextoUser;
