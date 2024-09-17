package beingvig.quickcartserver.entities;

public class OrderRequest {
    private Long userId;
    private int totalAmount;
    private Long cartId;

    public OrderRequest() {
    }

    public OrderRequest(Long userId, int totalAmount, Long cartId) {
        this.userId = userId;
        this.totalAmount = totalAmount;
        this.cartId = cartId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(int totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }
}
