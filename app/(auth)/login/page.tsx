import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { LoginForm } from "./_components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function LoginPage() {
  return (
    <>
      <div className="container relative grid lg:h-[800px] min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/register"
          className={cn("absolute right-4 top-4 md:right-8 md:top-8")}
        >
          Register
        </Link>
        <div className="relative hidden h-full flex-col p-10 dark:text-white lg:flex">
          <div className="absolute inset-0 " />
          <div className="relative z-20 flex items-center text-lg font-medium">
            NEXTJS + JWT + STRIPE
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Start your journey today, right here, right now!&rdquo;
              </p>
              <footer className="text-sm">Kamrul Saad</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 lg:dark:border-l">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
