import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Link } from "react-router-dom";

import Image from "@/assets/images/signin.jpg";

function SignInPage() {
  return (
    <>
      <div className="h-svh w-auto flex flex-row">
        <div className="w-full h-auto lg:w-1/2 p-8">
          <div className="items-center justify-start">
            <Link
              to={"/"}
              className="px-2 pb-1 text-3xl font-bold font-cursive"
            >
              QuickCart
            </Link>
          </div>
          <div className="p-10 m-12">
            <div>
              <h6 className="mt-4 mb-2 text-base md:text-md font-Highlight">
                Hi There
              </h6>
              <h1 className="mb-4 text-3xl font-bold font-Title leading-tight">
                SignIn
              </h1>
            </div>
            <div>
            <Input type="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-auto lg:block hidden">
          <img src={Image} alt="Some Image" className="bg-cover w-svw h-auto" />
        </div>
      </div>
    </>
  );
}

export default SignInPage;
