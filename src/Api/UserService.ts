import axios from 'axios';
import { User } from "@/Model/UserModel";

const API_URL = 'http://localhost:8080/auth';

export const registerUser = async (userData: Omit<User, 'user_id'>) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const signIn = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
    });
    return response.data;
};