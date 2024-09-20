import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/Api/UserService";
import Image from "@/assets/images/signin.jpg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const nav = useNavigate();
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await signIn(formData.email, formData.password);
        toast.success("Login Successfully");
        if (response && response.username) {
          localStorage.setItem('username', response.username);
      }
      if (response && response.userId) {
        localStorage.setItem('userId', response.userId);
    }
    setTimeout(() => {
        nav('/');}, 1000);
    } catch (error) {
        console.error('Error during login:', error);
    }
};

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
          className="h-svh w-auto flex flex-row-reverse"
        >
          <div className="w-1/2 h-auto lg:block hidden">
            <img
              src={Image}
              alt="Some Image"
              className="bg-cover w-svw h-svh"
            />
          </div>
          <div className="w-full h-auto lg:w-1/2 p-8 flex flex-col">
            <div className="items-center justify-start">
              <Link
                to={"/"}
                className="px-2 pb-1 text-3xl font-bold font-cursive"
              >
                QuickCart
              </Link>
            </div>
            <div className="p-4 md:p-6 lg:p-10 mx-[8%] md:mx-[15%] lg:mx-[18%] my-6 md:my-8 lg:my-12 flex-grow">
              <motion.div
                initial={{ opacity: 0, rotateX: 0 }}
                animate={{ opacity: 1, rotateX: -10 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <h6 className="mt-4 mb-2 text-base md:text-md font-Highlight">
                  Welcome Back
                </h6>
                <h1 className="mb-8 md:mb-10 lg:mb-14 text-2xl md:text-3xl lg:text-4xl font-bold font-Title leading-tight">
                  Sign In
                </h1>

                <div className="flex flex-col gap-y-6 md:gap-y-8">
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-4 md:p-5 lg:p-6"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="p-4 md:p-5 lg:p-6"
                  />
                  <Button type="submit" className="mt-[-0.5rem]">
                    Log In
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="flex mt-auto">
              <p className="mr-2">Don't have an account?</p>
              <Link to={"/auth/register"} className="text-blue-500">
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
        <Toaster richColors />
      </form>
    </>
  );
};
export default SignInPage;
