import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";

import Image from "@/assets/images/signin.jpg";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "@/Api/UserService";

import { toast, Toaster } from "sonner";

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
      return;
    }

    try {
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "CUSTOMER",
      };

      const response = await registerUser(userData);
      console.log("Registration successful:", response.data);
      nav('/auth/login');
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
        className="h-svh w-auto flex flex-row-reverse"
      >
        <div className="w-1/2 h-auto lg:block hidden">
          <img src={Image} alt="Some Image" className="bg-cover w-svw h-svh" />
        </div>
        <div className="w-full h-auto lg:w-1/2 p-8 flex flex-col">
          <div className="items-center justify-start">
            <Link to="/" className="px-2 pb-1 text-3xl font-bold font-cursive">
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
                Welcome
              </h6>
              <h1 className="mb-8 md:mb-10 lg:mb-14 text-2xl md:text-3xl lg:text-4xl font-bold font-Title leading-tight">
                Sign Up
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                  <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="p-4 md:p-5 lg:p-6"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="p-4 md:p-5 lg:p-6"
                    required
                  />
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="col-span-2 p-4 md:p-5 lg:p-6"
                    required
                  />
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="col-span-2 p-4 md:p-5 lg:p-6"
                    required
                  />
                  <Button
                    type="submit"
                    className="col-span-2 mt-[-0.5rem]"
                    onSubmit={() => {
                      toast.success("Registration Successful");
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
          <div className="flex mt-auto">
            <p className="mr-2">Already have an account?</p>
            <Link to="/auth/login" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
        <Toaster richColors />
      </motion.div>
    </>
  );
}

export default SignUpPage;
