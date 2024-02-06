import { Input } from "./components/ui/input";
import ContextProvider, { useContextProvider } from "./providers/Provider";
import useMakeRequest from "./hooks/useMakeRequest";
function App() {
  const { value } = useContextProvider();
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
