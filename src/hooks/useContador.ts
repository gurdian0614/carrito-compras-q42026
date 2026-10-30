import { useState } from "react";
import type { Contador } from "../types/Contador";

const useContador = (valorInicial: number = 1) : Contador  => {
    const [contador, setContador] = useState<number>(valorInicial);
    const incremento = () : void => setContador(prev => prev + 1);
    const decremento = () : void => setContador(prev => (prev > 1 ? prev - 1 : 1));

    return {
        contador,
        incremento,
        decremento,
    }
};

export default useContador;