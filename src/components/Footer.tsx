import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="bg-accent h-96"></div>
      <div className="bg-primary p-6">
        <div className="flex items-center justify-between text-primary-foreground mx-8">
          <div className="flex items-center">
            <Link to={"/"} className="px-2 pb-1 text-3xl font-cursive">
              QuickCart
            </Link>
          </div>
          <div className="flex space-x-4 items-center justify-between">
            <a
              href=""
              className="hover:text-primary-foreground/80"
              target="_blank"
            >
              Github
            </a>
            <a
              href=""
              className="hover:text-primary-foreground/80"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href=""
              className="hover:text-primary-foreground/80"
              target="_blank"
            >
              Instagram
            </a>
          </div>
          <div className="">Created by Vignesh Esakkiappan</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
