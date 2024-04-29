import type { Category } from '@/interfaces/Category.ts';
import type { Image } from '@/interfaces/Image.ts';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Image[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}
