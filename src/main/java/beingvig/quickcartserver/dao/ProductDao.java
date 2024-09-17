package beingvig.quickcartserver.dao;

import beingvig.quickcartserver.entities.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDao extends JpaRepository<Products, Long> {
}
