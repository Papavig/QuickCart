package beingvig.quickcartserver.controller;

import beingvig.quickcartserver.entities.Products;
import beingvig.quickcartserver.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Products> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/{id}")
    public Products getProductById(@PathVariable Long id) {
        return productService.getProductsById(id);
    }

    @PostMapping
    public ResponseEntity<String> addProduct(@RequestBody Products product) {
        productService.addProduct(product);
        return ResponseEntity.ok("Product added successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable Long id, @RequestBody Products product) {
        product.setProduct_id(id);
        productService.updateProduct(product);
        return ResponseEntity.ok("Product updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.removeProduct(id);
        return ResponseEntity.ok("Product deleted successfully");
    }
}