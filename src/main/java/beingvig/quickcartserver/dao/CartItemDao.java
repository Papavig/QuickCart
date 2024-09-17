package beingvig.quickcartserver.dao;

import beingvig.quickcartserver.entities.Cart;
import beingvig.quickcartserver.entities.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CartItemDao extends JpaRepository<CartItem, Long> {


}