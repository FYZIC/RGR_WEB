import React from 'react';
import './products-card.scss';
import Product from '../../../types/product';
import { useCart } from '../../../store/cart-context';

function ProductCard({ id, name, description, image, price }: Product): JSX.Element {
    const { addToCart } = useCart(); // Используем хук для доступа к состоянию корзины

    const handleAddToCart = () => {
        addToCart({ id, name, price }); // Добавляем товар в корзину
    };

    return (
        <article className="products-card">
            <img className="products-card__image" src={image} width='265' height='420' alt="фото товара." />
            <div className="products-card__content">
                <h3 className="products-card__title">{name}</h3>
                <p className="products-card__description">{description}</p>
                <b className="products-card__price">{price} ₽</b>
                <button className='products-card__button' onClick={handleAddToCart}>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16667 0.107941C0.798477 0.107941 0.5 0.406418 0.5 0.774607C0.5 1.1428 0.798477 1.44127 1.16667 1.44127H2.93794L3.40537 3.77666C3.40821 3.79461 3.41176 3.81232 3.416 3.82976L4.38338 8.66309L4.3835 8.66365C4.46706 9.08366 4.69562 9.46093 5.02921 9.72948C5.36111 9.99666 5.77595 10.1393 6.20183 10.1328H11.8225C12.2484 10.1393 12.6633 9.99666 12.9952 9.72948C13.3289 9.46081 13.5575 9.08332 13.641 8.66309L13.641 8.6631L13.642 8.6581L14.5691 3.79666C14.6063 3.60149 14.5545 3.39989 14.4279 3.24681C14.3012 3.09372 14.1129 3.00511 13.9142 3.00511H4.61072L4.1381 0.643769C4.07574 0.332198 3.80215 0.107941 3.4844 0.107941H1.16667ZM5.69098 8.40238L4.87759 4.33844H13.1084L12.3328 8.4053C12.31 8.51782 12.2485 8.61884 12.1591 8.69085C12.0691 8.76329 11.9565 8.80177 11.841 8.79956L11.841 8.79943H11.8282H6.19614V8.79931L6.18337 8.79956C6.06787 8.80177 5.95528 8.76329 5.8653 8.69085C5.77531 8.61842 5.71368 8.51664 5.69117 8.40334L5.69098 8.40238ZM4.55739 12.3634C4.55739 11.6754 5.1151 11.1177 5.80307 11.1177C6.49105 11.1177 7.04876 11.6754 7.04876 12.3634C7.04876 13.0513 6.49105 13.6091 5.80307 13.6091C5.1151 13.6091 4.55739 13.0513 4.55739 12.3634ZM10.9307 12.3634C10.9307 11.6754 11.4884 11.1177 12.1764 11.1177C12.8644 11.1177 13.4221 11.6754 13.4221 12.3634C13.4221 13.0513 12.8644 13.6091 12.1764 13.6091C11.4884 13.6091 10.9307 13.0513 10.9307 12.3634Z" fill="currentColor"/>
                </svg>
                </button>
            </div>
        </article>
    );
}

export default ProductCard;

