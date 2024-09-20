import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Product } from "@/Model/ProductModel";
import { ProductService } from "@/Api/ProductService";
import { Cart, CartService } from "@/Api/CartService";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "sonner";
import OrderButton from "@/components/OrderButton";

const Products: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [displayedQuantity, setDisplayedQuantity] = useState<number>(1);

  const { product_id } = useParams<{ product_id: string }>();

  const userId = localStorage.getItem('userId');

  const nav = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (product_id) {
        try {
          const fetchedProduct = await ProductService.getProductById(
            Number(product_id)
          );
          setProduct(fetchedProduct);
        } catch (error) {
          setError("Failed to load product");
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [product_id]);

  const incrementQuantity = () => setDisplayedQuantity((prev) => prev + 1);

  const decrementQuantity = () =>
      setDisplayedQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    if (product) {
      try {
        const cartItem: Cart = {
          id: Date.now(),
          productId: product.id,
          productName: product.name,
          quantity: displayedQuantity,
          amount: product.price * displayedQuantity,
          userId: Number(userId),
        };

        const addedToCart = await CartService.addToCart(cartItem);
        console.log('Added to cart:', addedToCart);
        toast.success('Added to cart successfully');
        setTimeout(() => {
          nav(0);
      }, 2000);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  const { name, image_url, price, description } = product;

  return (
    <>
    <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square relative">
              <img
                alt={name}
                className="w-full h-full object-cover rounded-lg"
                src={image_url}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{name}</h1>
            </div>
            <div className="text-4xl font-bold">₹{price}</div>
            <p className="text-gray-600">{description}</p>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Quantity</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{displayedQuantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-4">
              <Button
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <OrderButton product={product} displayedQuantity={displayedQuantity} userId={Number(userId)} />
            </div>
          </div>
        </div>
        <Toaster richColors/>
      </div>
    </>
  );
};

export default Products;
