import axios from 'axios';
import { Product } from '@/Model/ProductModel';

const Url = 'http://localhost:8080/products'; 

export const ProductService = {
    getAllProducts: async (): Promise<Product[]> => {
        const response = await axios.get<Product[]>(`${Url}`);
        return response.data;
    },

    addProduct: async (product: Product): Promise<Product> => {
        const response = await axios.post<Product>(`${Url}`, product);
        return response.data;
    },

    updateProduct: async (productId: number, updatedProduct: Product): Promise<Product> => {
        const response = await axios.put<Product>(`${Url}/${productId}`, updatedProduct);
        return response.data;
    },

    deleteProduct: async (productId: number): Promise<void> => {
        await axios.delete(`${Url}/${productId}`);
    },

    getProductById: async (productId: number): Promise<Product> => {
        const response = await axios.get<Product>(`${Url}/${productId}`);
        return response.data;
    }
};
