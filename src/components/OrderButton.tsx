import React, { useState } from "react";
import { OrderService, OrderItem } from "@/Api/OrderService";
import { Button } from "./ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  product: Product;
  displayedQuantity: number;
  userId: number;
}

const OrderButton: React.FC<Props> = ({
  product,
  displayedQuantity,
  userId,
}) => {
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    setLoading(true);

    const orderItem: OrderItem = {
      productId: product.id,
      productName: product.name,
      quantity: displayedQuantity,
      amount: product.price * displayedQuantity,
    };

    try {
      await OrderService.placeOrder({
        orderItems: [orderItem],
        userId: userId,
      });
      alert("Order placed successfully!");
    } catch (err) {
      console.error("Error placing order:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleBuyNow} disabled={loading}>
        {loading ? "Placing Order..." : "Buy Now"}
      </Button>
    </div>
  );
};

export default OrderButton;
