package quickcart.backend.dao;

import quickcart.backend.entities.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDao extends JpaRepository<Products, Long> {
}
