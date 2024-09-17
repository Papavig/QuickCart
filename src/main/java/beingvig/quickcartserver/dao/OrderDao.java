package beingvig.quickcartserver.dao;

import beingvig.quickcartserver.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderDao extends JpaRepository<Order, Long> {

}