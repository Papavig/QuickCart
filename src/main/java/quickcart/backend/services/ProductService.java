package quickcart.backend.services;

import quickcart.backend.dao.ProductDao;
import quickcart.backend.entities.Products;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductDao productDao;

    @Autowired
    public ProductService(ProductDao productDao) {
        this.productDao = productDao;
    }

    public List<Products> getProducts() {
        return productDao.findAll();
    }

    public Products addProduct(Products product) {
        return productDao.save(product);
    }

    public void updateProduct(Products product) {
        productDao.save(product);
    }

    public Products removeProduct(Long productId) {
        Products entity = productDao.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with ID: " + productId));
        productDao.deleteById(productId);
        return entity;
    }

    public Products getProductsById(Long productId) {
        Optional<Products> product = productDao.findById(productId);
        if (product.isPresent()) {
            return product.get();
        };
        return null;
    }
}
