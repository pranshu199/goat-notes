"use client"
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button"
import { useState } from "react";
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";

function LogOutButton() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async() => {
        setLoading(true);

    const {errorMessage} = await logOutAction();        
        if(!errorMessage){
            toast.success("Logged Out Successfuly")
        }
        else{
            toast.error("Error while logout");
            router.push("/");
        }
        setLoading(false);
    }

  return (
    <Button variant="outline" onClick={handleLogout} disabled={loading}>
        {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  )
}

export default LogOutButton