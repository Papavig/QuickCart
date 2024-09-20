import { Link } from "react-router-dom";
import { toast } from "sonner";

function Footer() {
  return (
    <footer>
      <div className="hidden sm:block h-max">
        <div className="grid grid-cols-4 gap-4 py-8 px-12">
          <div className="p-8">
            <h1 className="font-Title font-semibold text-xl mb-2">SHOP</h1>
            <ul className="flex flex-col gap-1 font-Highlight">
              <li>MEN</li>
              <li>WOMEN</li>
              <li>SALE</li>
              <li>GIFT CARD</li>
            </ul>
          </div>
          <div className="p-8">
            <h1 className="font-Title font-semibold text-xl mb-4">
              OUR POLICIES
            </h1>
            <ul className="flex flex-col gap-1 font-Highlight">
              <li>RETURN AND EXCHANGES</li>
              <li>SHIPPING</li>
              <li>PRIVACY POLICY</li>
              <li>TERMS</li>
              <li>COOKIE SETTING</li>
            </ul>
          </div>
          <div className="p-8">
            <h1 className="font-Title font-semibold text-xl mb-4">MORE</h1>
            <ul className="flex flex-col gap-1 font-Highlight">
              <a href="https://bento.me/vig" target="_blank">
                ABOUT US
              </a>
              <a className="cursor-pointer" onClick={() => {toast.error("Sorry we are closed.")}}>STORE LOCATION</a>
              <a href="https://vigdev.vercel.app/" target="_blank">
                DEVELOPER'S PORTFOLIO
              </a>
            </ul>
          </div>
          <div className="p-8 hidden lg:block">
            <h1 className="text-3xl font-semibold font-Title mb-4">
              CONTACT US
            </h1>
            <div className="flex flex-col gap-y-2 font-Highlight">
              <p>
                If you are interested in placing bulk orders, we offer a wide
                range of stylish and high-quality clothes for all occasions.
              </p>
              <p>
                <b>Address: </b> <br /> Navi Mumbai, Maharashtra, <br /> 410206
              </p>
              <p>
                {" "}
                <b>Phone Number:</b> <br /> +91 9653314275
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary p-6 select-none">
        <div className="flex items-center justify-between text-primary-foreground mx-8">
          <div className="flex items-center">
            <Link to={"/"} className="px-2 pb-1 text-3xl font-cursive">
              QuickCart
            </Link>
          </div>
          <div className="flex space-x-4 items-center justify-between">
            <a
              href="https://github.com/papavig"
              className="hover:text-primary-foreground/80"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/papavig"
              className="hover:text-primary-foreground/80"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/beingvig/"
              className="hover:text-primary-foreground/80"
              target="_blank"
            >
              Instagram
            </a>
          </div>
          <div className="hidden sm:block">Created by Vignesh Esakkiappan</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
