import UserListPage from "./components/home/UserListPage";
import ContextProvider from "./providers/Provider";

function App() {
  return (
    <>
      <UserListPage />
    </>
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
