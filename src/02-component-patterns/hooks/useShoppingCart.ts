import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interface";


export const useShoppingCart = () => {
   /* El shoppingCart sera un objeto cuya llaves sera un id de los articulos, el cual apunta apunta a un objeto el cual tenemos el 
        producto y la cantidad que esta llevando */
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({}); // El useState maneja un objeto, y dentro tendremos x cantidad de llaves(string) y los valores de ese objeto son de tipo ProductInCart 

    const onProductCountChange = ({ count, product }: {count: number, product: Product}) => {
        // console.log( count, product);
        
        setShoppingCart( oldShoppingCart => {
            
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count   

                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //Borra el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest

        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }

};
