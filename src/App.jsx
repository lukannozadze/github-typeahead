import { Input } from "./components/ui/input";
import ContextProvider, { useContextProvider } from "./providers/Provider";
import useMakeRequest from "./helpers/makeRequest";
function App() {
  const { value } = useContextProvider();
  console.log(value);
  return (
    <div className="flex items-center justify-center">
      <Input type="text" />
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
