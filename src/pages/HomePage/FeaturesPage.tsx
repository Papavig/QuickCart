import React, { useEffect, useState } from 'react';
import { ProductService } from '@/Api/ProductService'; 
import { Product } from '@/Model/ProductModel';
import { useNavigate } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const fetchedProducts = await ProductService.getAllProducts();
              setProducts(fetchedProducts);
          } catch (error) {
              setError('Failed to load products');
              console.error('Error fetching products:', error);
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
        <div className="container mx-auto p-4">
            <div className="my-4 py-8 text-center">
                <div className="max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl font-bold font-Title mb-4">NEW ARRIVALS</h1>
                    <p className="text-base text-gray-600 mb-6">
                        Check out the latest additions to our collection. From trendy styles
                        to timeless classics.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {products.slice(0, 6).map((product) => (
                        <div key={product.id} onClick={() => handleClick(product.id)} className="overflow-hidden">
                            <img
                                src={product.image_url}
                                alt={product.name} 
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                            <div className="p-4 text-left">
                                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                                <p className="mb-6 text-xl">₹{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;
