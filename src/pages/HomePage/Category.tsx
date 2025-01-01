import Man from "@/assets/images/Man.jpg";
import Women from "@/assets/images/Women.jpg";
import Accessories from "@/assets/images/ACCESSORIES.jpg";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  title: string;
}
function Category() {
  const ImageCard: React.FC<ImageProps> = ({ src, alt, title }) => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
      <div className="relative overflow-hidden rounded-3xl">
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-[40rem] object-cover transition-transform duration-300 ${
            isButtonHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end p-6 rounded-3xl">
          <h2 className="text-3xl font-bold font-Title mb-2 text-white">
            {title}
          </h2>
          <Button
            className="bg-white text-black hover:bg-gray-200"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={() => {
              toast.warning("This Feature will be added soon.");
            }}
          >
            Explore
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-12 my-12 mb-20 mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <ImageCard src={Man} alt="Man" title="Man" />
        <ImageCard src={Women} alt="Women" title="Woman" />
        <ImageCard src={Accessories} alt="Accessories" title="Accessories" />
      </div>
      <Toaster richColors />
    </div>
  );
}

export default Category;
