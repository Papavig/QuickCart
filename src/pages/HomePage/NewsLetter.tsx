import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

function NewsLetter() {
  return (
    <div className="w-full h-max bg-accent flex justify-center items-center">
      <div className="my-8 text-center p-4">
        <h1 className="text-3xl font-bold font-Title mb-2">
          SIGN UP FOR NEWSLETTER
        </h1>
        <p className="text-lg font-extralight opacity-90 mb-4">Plus, you'll get the inside scoop on all things on QuickCart.</p>

        <Toaster richColors />
        <Button
          className="hover:cursor-not-allowed opacity-50"
          onClick={() => {
            toast.warning("This Feature will be added soon.");
          }}
        >
          Coming soon..
        </Button>
      </div>
    </div>
  );
}

export default NewsLetter;
