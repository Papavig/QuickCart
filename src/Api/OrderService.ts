import axios from 'axios';

export interface OrderItem {
    productId: number;
    productName: string;
    quantity: number;
    amount: number;
    userId: number;
}

export interface OrderRequest {
    orderItems: OrderItem[];  
    userId: number;
}

const Url = 'http://localhost:8080/orders'; 

export const OrderService = {
    placeOrder: async (orderRequest: OrderRequest): Promise<OrderItem[]> => {
        const response = await axios.post<OrderItem[]>(`${Url}/place-order`, orderRequest);
        return response.data;
    },
};
