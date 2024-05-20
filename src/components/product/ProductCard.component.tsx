import { CartIconComponent } from '@/components/product/CartIcon.component.tsx';
import type { Product } from '@/interfaces/Product.ts';

import styles from './product.module.css';

export const ProductCardComponent = ({ product }: { product: Product }) => (
    <div className={styles.card}>
        <div>
            <img className={styles.cardImg} src={product.images[0]} alt={'card'} />
            <h2 className={styles.cardTitle}>{product.title}</h2>
        </div>
        <div className={styles.cardPriceWrapper}>
            <p className={styles.cardPrice}>
                {product.price}
                <span className={styles.cardPricePrefix}>&#8372;</span>
            </p>
            <button className={styles.cardButton}>
                <CartIconComponent />
            </button>
        </div>
    </div>
);
