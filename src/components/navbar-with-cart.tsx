import { useState, useRef, useEffect } from "react";
import { ShoppingCart, X } from "lucide-react";
import type { Cart } from "@/Api/CartService";
import { CartService } from "@/Api/CartService";
import OrderButton from "./OrderButton";

export function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [product, setProduct] = useState<Product | null>(null); // State for product
  const [displayedQuantity, setDisplayedQuantity] = useState<number>(1); 
  const cartRef = useRef<HTMLDivElement>(null);

  const userId = Number(localStorage.getItem("userId")); // Fetch userId once

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!userId) {
        console.error("No user ID found in localStorage");
        return;
      }
      try {
        const items = await CartService.getCartByUserId(userId);
        setCartItems(items);
        // Assuming the product details come with the cart items
        if (items.length > 0) {
          setProduct(items[0]); // Set the first product as default
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [userId]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="relative" ref={cartRef}>
      <button
        className="ml-4 flex items-center"
        onClick={toggleCart}
        aria-expanded={isCartOpen}
        aria-controls="cart-menu"
      >
        <span className="flex items-center space-x-2 hover:scale-105 duration-200">
          <ShoppingCart className="h-5 w-auto mr-1 opacity-90 hover:scale-110 duration-200 ease-in-out transition-transform" />
        </span>
      </button>
      {isCartOpen && (
        <div
          id="cart-menu"
          className="absolute right-0 mt-2 w-64 bg-background border rounded-md shadow-lg z-10"
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>
            {cartItems.length > 0 ? (
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <span>{item.productName}</span>
                    <span>₹{item.amount}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty</p>
            )}
            <div className="w-full flex justify-center mt-6">
            {product && (
              <OrderButton
                product={product}
                displayedQuantity={displayedQuantity}
                userId={userId}
                name="Checkout"
              />
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
