package quickcart.backend.services;

import quickcart.backend.dao.CartDao;
import quickcart.backend.dao.OrderItemDao;
import quickcart.backend.dao.ProductDao;
import quickcart.backend.dao.UserDao;
import quickcart.backend.entities.Cart;
import quickcart.backend.entities.OrderItem;
import quickcart.backend.entities.Products;
import quickcart.backend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


    @Transactional
    public List<OrderItem> placeOrder(List<OrderItem> orderItems, Long userId) {
        orderItemDao.saveAll(orderItems);

        // Clear the user's cart after placing the order
        cartDao.deleteByUserId(userId);

        return orderItems; // Return the placed order items
    }

}


