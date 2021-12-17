import React from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components';
import '../styles/custom-styles.css';

const product = {
    id:'1',
    title: ' Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPages = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/* El ProductCard es un objeto que tiene el ProductCarHOC en el index.ts */}

                {/*Cuando se usa las propiedades internas de nuetsra componente */}
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-white text-bold'/>
                    <ProductCard.Buttons className='custom-buttons'/>
                </ProductCard>

                {/*Cuando hacemos la construccion de los componentes basado en otros componentes hijos*/}
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}/>
                    <ProductTitle className='text-white text-bold'/>
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>

                {/* Se utilizaran style en la propiedades del componentes, tiene el beneficio que cuando se tiene una propiedad que cambie
                    basado en algun valor del estado */}
                <ProductCard 
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}/>
                    <ProductTitle style={{ fontWeight: 'bold' }}/>
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>

            </div>
        </div>
    )
};

/* Extensible styles:  nos permiten pasarle estilos, clases a los componentes prefabricados y estos puedan implementar esos estilos
	
	En la seccion se podra hacer:
	1. se pueda pasarle el className a cualquier componente.   
	2. se pueda mandar los style, especificando cualquier estilo.  */
