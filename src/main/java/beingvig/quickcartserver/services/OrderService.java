package beingvig.quickcartserver.services;

import beingvig.quickcartserver.dao.CartDao;
import beingvig.quickcartserver.dao.OrderDao;
import beingvig.quickcartserver.entities.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderDao orderDao;

    @Autowired
    private CartDao cartDao;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void placeOrder(Long userId, Long cartId) {
        Cart cart = cartDao.findById(cartId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        // Calculate the total amount as an int
        int totalAmount = cart.getCartItems().stream()
                .mapToInt(item -> item.getProduct().getPrice() * item.getQuantity())
                .sum();

        // Call the stored procedure to place the order
        jdbcTemplate.update("CALL sp_place_order(?, ?, ?)", userId, totalAmount, cartId);
    }
}

