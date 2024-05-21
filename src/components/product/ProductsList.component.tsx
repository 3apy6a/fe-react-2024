import { products } from '@/api/products.ts';
import { ProductCardComponent } from '@/components/product/ProductCard.component.tsx';

import styles from './product.module.css';

export const ProductsListComponent = () => (
    <div className={styles.productsList}>
        {products.map((product) => (
            <ProductCardComponent key={product.id} product={product} />
        ))}
    </div>
);
