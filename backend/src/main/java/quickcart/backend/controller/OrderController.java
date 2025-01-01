package quickcart.backend.controller;

import quickcart.backend.entities.OrderItem;
import quickcart.backend.services.OrderService;
import quickcart.backend.utils.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place-order")
    public ResponseEntity<?> placeOrder(@RequestBody OrderRequest orderRequest) {
        try {
            Long userId = orderRequest.getUserId(); // Extract userId from the request body

            // Place the order based on order items
            List<OrderItem> placedOrderItems = orderService.placeOrder(
                    orderRequest.getOrderItems(), // Order items
                    userId
            );
            return ResponseEntity.ok(placedOrderItems);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Order could not be placed: " + e.getMessage());
        }
    }



}
