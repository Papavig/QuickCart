// src/Model/CartModel.ts

export interface CartItem {
    cartItemId: number; 
    productId: number; 
    quantity: number;
    product: {
        productId: number; 
        name: string;
        description: string;
        price: number; 
    };
}

export interface Cart {
    cartId: number; 
    userId: number; 
    cartItems: CartItem[];
}