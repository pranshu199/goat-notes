"use client"
import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

type Props = {
    type: "login" | "register";
}

function AuthForm({type}: Props) {
    const isLoginForm = type === "login";
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData : FormData)=>{
        console.log("form Submitted");
    }
  return (
    <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 ">
               <Label htmlFor="email" >Email</Label>
               <Input id="email" name="email" placeholder="Enter your email" type="email" required disabled={isPending} />
            </div>
            <div className="flex flex-col space-y-1.5">
               <Label htmlFor="password" >Password</Label>
               <Input id="password" name="password" placeholder="Enter your password" type="Password" required disabled={isPending} />
            </div>
        </CardContent>
        <CardFooter className="mt-4 flex flex-col gap-6">
            <Button className="w-full mt-4">
                {isPending ? <Loader2 className="animate-spin" /> :isLoginForm ? "Login" : "Sign Up"}
            </Button>
            <p className="text-s">
                {isLoginForm ? "Don't have an account yet? " : "Already Have an account? "}
                <Link href={isLoginForm ? "/sign-up" : "/login"}
                    className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
                >
                    {isLoginForm ? "Sign up" : "Login"}
                </Link>
            </p>
        </CardFooter>
    </form>
  )
}

export default AuthForm