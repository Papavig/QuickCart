import { ProductService } from "@/Api/ProductService";
import { Product } from "@/Model/ProductModel";
import { useEffect, useState } from "react";
import img from "@/assets/images/hero.jpg";

import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  let navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await ProductService.getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        setError("Failed to load products");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="relative w-auto mb-8">
          <img src={img} alt="Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-start">
            <div className="text-left ml-12">
              <h6 className="text-base md:text-lg font-Highlight">
                NEW ARRIVALS
              </h6>
              <h1 className="hidden text-black md:block text-3xl lg:text-6xl font-bold font-Title leading-tight">
                SPRING - SUMMER <br /> Collection 2024
              </h1>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Shop All</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                onClick={() => handleClick(product.id)}
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
