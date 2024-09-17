package beingvig.quickcartserver.dao;

import beingvig.quickcartserver.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemDao extends JpaRepository<OrderItem, Long> {

}
