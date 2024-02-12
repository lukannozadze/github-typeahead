import UserList from "./components/home/UserList";
import { Input } from "./components/ui/input";
import ContextProvider, { useContextProvider } from "./providers/Provider";
import { Icons } from "./components/ui/icons";
import { useToast } from "./components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast/toaster";
import { useEffect } from "react";
import UserFilter from "./components/home/UserFilter";


function App() {
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
  );
}

const WithProvider = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};
export default WithProvider;
