package beingvig.quickcartserver.dao;

import beingvig.quickcartserver.entities.Cart;
import beingvig.quickcartserver.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartDao extends JpaRepository<Cart, Long> {

}
