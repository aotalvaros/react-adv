import { createContext, ReactElement, CSSProperties } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Product } from '../interfaces/interface';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps) // la informacion que se van a compartr a todos sus hijos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
const { Provider } = ProductContext; //Proveedor de informacion

//No es necesario que este aca la interface
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
};


export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProducts();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${styles.productCard} ${className}` }
                style={ style }
            > 
                { children }
            </div>
        </Provider>
    )
};

