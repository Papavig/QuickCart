import axios from 'axios';

export interface Cart {
    id: number;
    productId: number;
    userId: number;
    productName: string;
    quantity: number;
    amount: number;
}

const Url = 'http://localhost:8080/carts'; 

export const CartService = {
    getCartByUserId: async (userId: number): Promise<Cart[]> => {
        const response = await axios.get<Cart[]>(`${Url}/${userId}`);
        return response.data;
    },

    addToCart: async (cart: Cart): Promise<Cart> => {
        const response = await axios.post<Cart>(`${Url}/add`, cart);
        return response.data;
    },

    updateCart: async (cartId: number, updatedCart: Cart): Promise<Cart> => {
        const response = await axios.put<Cart>(`${Url}/${cartId}`, updatedCart);
        return response.data;
    },

    deleteCartItem: async (cartItemId: number): Promise<void> => {
        await axios.delete(`${Url}/item/${cartItemId}`);
    },

    clearCartByUserId: async (userId: number): Promise<void> => {
        await axios.delete(`${Url}/clear/${userId}`);
    }
};
