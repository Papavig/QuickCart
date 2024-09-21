import React, { useState } from "react";
import { OrderService, OrderItem } from "@/Api/OrderService";
import { Button } from "./ui/button";
import { toast, Toaster } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  product: Product;
  displayedQuantity: number;
  userId: number;
  name: string,
}

const OrderButton: React.FC<Props> = ({
  product,
  displayedQuantity,
  userId,
  name,
}) => {
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    setLoading(true);

    const orderItem: OrderItem = {
      productId: product.id,
      productName: product.name,
      quantity: displayedQuantity,
      amount: product.price * displayedQuantity,
      userId: userId
    };

    try {
      await OrderService.placeOrder({
        orderItems: [orderItem],
        userId: userId,
      });
      toast.success("Order placed successfully");
    } catch (err) {
      console.error("Error placing order:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleBuyNow} disabled={loading} className="w-full">
        {loading ? "Placing Order..." : name}
      </Button>
      <Toaster />
    </div>
  );
};

export default OrderButton;
