package beingvig.quickcartserver.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Quick_Cart_Products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long product_id;

    @Column(name = "name")
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "price")
    private int price;

    @Column(name = "category")
    private String category;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "stock_quantity", columnDefinition = "NUMBER DEFAULT 0")
    private int stock_quantity;

    public Products() {
    }

    public Products(Long product_id, String name, String description, int price, String category, String image_url, int stockQuantity) {
        this.product_id = product_id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image_url = image_url;
        this.stock_quantity = stockQuantity;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public int getStock_quantity() {
        return stock_quantity;
    }

    public void setStock_quantity(int stock_quantity) {
        this.stock_quantity = stock_quantity;
    }
}
