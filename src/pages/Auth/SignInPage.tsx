import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Link } from "react-router-dom";

import Image from "@/assets/images/signin.jpg";

function SignInPage() {
  return (
    <>
      <div className="h-svh w-auto flex flex-row-reverse">
        <div className="w-1/2 h-auto lg:block hidden">
          <img src={Image} alt="Some Image" className="bg-cover w-svw h-auto" />
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
            <div>
              <h6 className="mt-4 mb-2 text-base md:text-md font-Highlight">
                Welcome Back
              </h6>
              <h1 className="mb-8 md:mb-10 lg:mb-14 text-2xl md:text-3xl lg:text-4xl font-bold font-Title leading-tight">
                Sign In
              </h1>
            </div>
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              <Input
                type="email"
                placeholder="Email"
                className="p-4 md:p-5 lg:p-6"
              />
              <Input
                type="password"
                placeholder="Password"
                className="p-4 md:p-5 lg:p-6"
              />
              <Button className="mt-[-0.5rem]">Log In</Button>
            </div>
          </div>
          <div className="flex mt-auto">
            <p className="mr-2">Don't have an account?</p>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
