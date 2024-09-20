package beingvig.quickcartserver.dao;

import beingvig.quickcartserver.entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartDao extends JpaRepository<Cart, Long> {
    Cart findByUserIdAndProductId(Long orderId, Long userId);
    List<Cart> findByUserId(Long userId);
    void deleteByUserId(Long userId);
}
