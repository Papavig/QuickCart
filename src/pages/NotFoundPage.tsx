import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 select-none">
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-bold text-gray-800">Ooops!</h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-gray-600">
          Something Went Wrong.
        </p>
        <Link to={"/"}>
          <Button className="mt-4 hover:scale-95 duration-300 transition-transform ease-in-out">
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
