import React from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components';
import { productos } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';


export const ShoppingPages = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();
 
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {/* Vamos a duplicar la cantidad de tarjetas por cantidad de productos que nosotros tenemos */}
                {
                    productos.map( products => (
                        <ProductCard 
                            key={products.id}   
                            product={products}
                            className='bg-dark text-white'
                            onChange={ onProductCountChange}
                            value={shoppingCart[products.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}/>
                            <ProductTitle className='text-white text-bold'/>
                            <ProductButtons className='custom-buttons'/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map( ([key, product]) => (
                        <ProductCard                         
                            key={key}
                            product={product}
                            className='bg-dark text-white'
                            style={{width: '100px'}}
                            onChange={onProductCountChange}
                            value={product.count} //recibira el numero de veces que se le da click en la tarjeta grande y la manda a la pequeña
                        >                        
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}/>
                            <ProductButtons 
                                className='custom-buttons'
                                style={{
                                    display: 'flex',
                                    justifyContent:'center'
                                }}    
                            />
                        </ProductCard>
                        
                    ))
                }
            </div>
        </div>
    )
};

