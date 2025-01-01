package quickcart.backend.controller;

import quickcart.backend.dao.CartDao;
import quickcart.backend.entities.Cart;
import quickcart.backend.services.CartService;
import quickcart.backend.utils.CartItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
public class CartController {

    private final CartService cartService;
    private final CartDao cartDao;

    @Autowired
    public CartController(CartDao cartDao, CartService cartService) {
        this.cartDao = cartDao;
        this.cartService = cartService;
    }

    // Endpoint to add a product to the cart
    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestBody CartItemRequest cartItemRequest) throws Exception {
        Cart updatedCart = cartService.addToCart(cartItemRequest.getUserId(), cartItemRequest.getProductId(), cartItemRequest.getQuantity());
        return ResponseEntity.ok(updatedCart);
    }

    // Endpoint to get the cart for a specific user
    @GetMapping("/{userId}")
    public ResponseEntity<List<Cart>> getCartByUser(@PathVariable Long userId) {
        List<Cart> cartItems = cartService.getCartItems(userId);
        return ResponseEntity.ok(cartItems);
    }
}