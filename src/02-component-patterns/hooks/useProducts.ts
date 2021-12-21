import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interface";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const useProducts = ({ onChange, product, value = 0  }: useProductArgs) => {
    
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange); //una bandera para saber si el onChange esta siendo controlado
    
    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({ count: value, product});
        }

        const newValue = Math.max(counter + value, 0) 
        setCounter( newValue);

        onChange && onChange({ count: newValue, product }); // cuando el counter cambia llamo el onChange, si el onChange tiene un valor se ejecuta la linea (como tener una condicion if), ya que genera un error si no se hace. 
    };

    useEffect(() => {
       setCounter(value);
    }, [value])

    return{
        counter,
        increaseBy
    }
};
