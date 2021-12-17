import { CSSProperties, useContext } from "react";
import noImage from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string, 
    className?: string ,
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {
    
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) { // si la imagen viene, el imgToShow a mostrar va ser igual al img
        imgToShow = img;
    }else if(product.img){ 
        imgToShow = product.img
    }else{
        imgToShow = noImage;
    }

    return (
        <img 
            className={ `${styles.productImg} ${className}` } 
            src={ imgToShow } alt="Coffe Mug"
            style={ style }
        />
    )
};