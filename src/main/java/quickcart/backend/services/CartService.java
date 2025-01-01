package quickcart.backend.services;

import quickcart.backend.dao.CartDao;
import quickcart.backend.dao.ProductDao;
import quickcart.backend.entities.Cart;
import quickcart.backend.entities.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    private CartDao cartDao;
    private ProductDao productDao;

    @Autowired
    public CartService(CartDao cartDao, ProductDao productDao) {
        this.cartDao = cartDao;
        this.productDao = productDao;
    }

    public Cart addToCart(Long userId, Long productId, int quantity) throws Exception {
        // Fetch product and check if stock is available
        Products product = productDao.findById(productId)
                .orElseThrow(() -> new Exception("Product not found"));

        if (product.getStock_quantity() < quantity) {
            throw new Exception("Insufficient stock");
        }

        // Check if the item is already in the cart
        Cart existingCart = cartDao.findByUserIdAndProductId(userId, productId);

        if (existingCart != null) {
            // Update quantity if already exists in cart
            existingCart.setQuantity(existingCart.getQuantity() + quantity);
            existingCart.setAmount(existingCart.getQuantity() * product.getPrice());
            cartDao.save(existingCart);
            return existingCart;
        } else {
            // Add new item to cart
            Cart newCart = new Cart();
            newCart.setUserId(userId);
            newCart.setProductId(productId);
            newCart.setProductName(product.getName());
            newCart.setQuantity(quantity);
            newCart.setAmount(product.getPrice() * quantity);
            return cartDao.save(newCart);
        }
    }

    public List<Cart> getCartItems(Long userId) {
        return cartDao.findByUserId(userId);
    }
}
