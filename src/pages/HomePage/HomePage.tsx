import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import FeaturesPage from "./FeaturesPage";
import Pant from "./Pant";
import Category from "./Category";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
    >
      <Navbar />
      <Hero />
      <FeaturesPage />
      <Pant />
      <Category />
      <NewsLetter />
      <Footer />
    </motion.div>
  );
}

export default HomePage;