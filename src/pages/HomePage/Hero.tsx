import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative w-full -inset-0">
      <img
        src="src\assets\images\hero.jpg"
        alt="Image"
        className="rounded-md object-cover select-none pointer-events-none"
      />
      <div className="absolute left-4 md:left-8 lg:left-16 top-0 bottom-0 flex flex-col justify-center p-14">
        <div className="text-left">
          <h6 className="text-base md:text-lg font-Highlight">NEW ARRIVALS</h6>
          <h1 className="hidden md:block text-3xl lg:text-6xl font-bold font-Title leading-tight">
            SPRING - SUMMER <br /> Collection 2024
          </h1>
          <h3 className="hidden lg:block text-lg font-extralight opacity-90">
            A specialist label creating luxury essentials. Ethically crafted
            <br />
            with an unwavering commitment to exceptional quality.
          </h3>
          <motion.div
            className="mt-4 w-max h-auto select-none"
            whileHover={{ scale: "0.95", rotate: "1.5deg" }}
            transition={{ duration: 0.3 }}
          >
            <Link to={"/sd"}><Button>Shop now</Button></Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
