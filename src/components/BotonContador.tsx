import type { BotonContadorProps } from "../types/BotonContadorProps";

export const BotonContador: React.FC<BotonContadorProps> = ({
    incremento,
    decremento,
    cantidad,
}) => {
    return (
        <div className="flex items-center gap-3">
            <button onClick={decremento} className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                -
            </button>
            <span className="w-6 text-center font-semibold">{cantidad}</span>
            <button onClick={incremento} className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 text-white">
                +
            </button>
        </div>
    );
}