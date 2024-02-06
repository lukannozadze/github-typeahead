
import UserList from "./components/ui/UserList";
import { Input } from "./components/ui/input";
import ContextProvider, {useContextProvider} from "./providers/Provider";
import { Icons } from "./components/ui/Loading";
function App() {
  const {value,isLoading} = useContextProvider();
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Input type="text" />
      <UserList value={value}/>
      {isLoading && <Icons.spinner className="h-12 w-12 animate-spin"/>}
      
     
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
