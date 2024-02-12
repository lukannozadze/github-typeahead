import { Icons } from "../ui/icons";
import { useToast } from "../ui/toast/use-toast";
import { Toaster } from "../ui/toast/toaster";
import { useEffect } from "react";
import UserFilter from "./UserFilter";
import UserList from "./UserList";
import { Input } from "../ui/input";
import { useContextProvider } from "@/providers/Provider";

export default function UserListPage() {

  const { value, isLoading, isError } = useContextProvider();
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }, [isError]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-6">
      <div className="w-[66%] flex gap-10 justify-center">
      <Input type="text" />
       <UserFilter usersNumber = {value?.items.length}/>
      </div>
      {isLoading && <Icons.spinner className="h-12 w-12 animate-spin" />}
      <UserList value={value} />
      {isError && <Toaster />}
    </div>
  )
}

