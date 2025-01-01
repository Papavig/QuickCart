package quickcart.backend.utils;

import quickcart.backend.entities.Cart;
import quickcart.backend.entities.OrderItem;

import java.util.List;

public class OrderRequest {
    private Long userId;
    private List<Cart> cartItems;
    private List<OrderItem> orderItems;

    public OrderRequest() {
    }

    public OrderRequest(Long userId, List<Cart> cartItems, List<OrderItem> orderItems) {
        this.userId = userId;
        this.cartItems = cartItems;
        this.orderItems = orderItems;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Cart> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<Cart> cartItems) {
        this.cartItems = cartItems;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }
}
