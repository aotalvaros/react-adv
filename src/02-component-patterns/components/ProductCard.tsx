import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, ProductCardProps } from '../interfaces/interface';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps) // la informacion que se van a compartr a todos sus hijos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
const { Provider } = ProductContext; //Proveedor de informacion

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProducts();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }> 
                { children }
            </div>
        </Provider>
    )
};

