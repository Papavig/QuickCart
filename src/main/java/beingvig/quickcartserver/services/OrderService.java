package beingvig.quickcartserver.services;

import beingvig.quickcartserver.dao.CartDao;
import beingvig.quickcartserver.dao.OrderItemDao;
import beingvig.quickcartserver.dao.ProductDao;
import beingvig.quickcartserver.dao.UserDao;
import beingvig.quickcartserver.entities.Cart;
import beingvig.quickcartserver.entities.OrderItem;
import beingvig.quickcartserver.entities.Products;
import beingvig.quickcartserver.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final CartDao cartDao;
    private final UserDao userDao;
    private final OrderItemDao orderItemDao;
    private final ProductDao productDao;

    @Autowired
    public OrderService(CartDao cartDao, UserDao userDao, OrderItemDao orderItemDao, ProductDao productDao) {
        this.cartDao = cartDao;
        this.userDao = userDao;
        this.orderItemDao = orderItemDao;
        this.productDao = productDao;
    }

    public List<OrderItem> placeOrder(List<OrderItem> orderItems, Long userId) {
        // Process each order item and associate with userId
        for (OrderItem orderItem : orderItems) {
            // Assuming you're setting the user information and other properties
            orderItemDao.save(orderItem);
        }

        // Clear the user's cart after placing the order
        cartDao.deleteByUserId(userId);

        return orderItems; // Return the placed order items
    }

}


