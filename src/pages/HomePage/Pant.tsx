import pants from "@/assets/images/Pants.webp";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
function Pant() {
  return (
    <div className="container my-12 px-4">
      <div className="mb-4">
        <img
          src={pants}
          alt="Pants"
          className="rounded-2xl w-full h-auto object-cover"
        />
      </div>
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold font-Title mb-2">
          PANTS FOR EVERYONE
        </h1>
        <p className="text-base text-gray-600 mb-4">
          Explore our stylish and comfortable pants collection. Perfect for any
          occasion, our range offers something for everyone, with quality and
          fit you can trust.
        </p>
        <Button className="mt-4" onClick={() => {
              toast.error("Unfortunately we don't have pants lol.");
            }}>See Details</Button>
      </div>
    </div>
  );
}

export default Pant;
