package quickcart.backend.dao;

import quickcart.backend.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderItemDao extends JpaRepository<OrderItem, Long> {
}
