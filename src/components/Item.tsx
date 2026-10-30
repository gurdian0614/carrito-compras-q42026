import useContador from "../hooks/useContador";
import type { ItemProps } from "../types/ItemProps";
import { BotonContador } from "./BotonContador";

export const Item: React.FC<ItemProps> = ({
    nombreProducto,
    cantidad,
}) => {
    const {
        contador,
        incremento,
        decremento,
    } = useContador(cantidad);

    return (
        <div className="flex items-center justify-between bg-white p-4 shadow-sm rounded-lg">
            <div>
                <h3 className="font-semibold text-gray-800">
                    {nombreProducto}
                </h3>
            </div>
            <BotonContador incremento={incremento} decremento={decremento} cantidad={contador} />
        </div>
    );
}