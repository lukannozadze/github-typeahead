import { useContextProvider } from "@/providers/Provider";

const UserList = ({ value }) => {
  const {usersPerPage} = useContextProvider()
  const filteredUsers = value?.items.slice(0, usersPerPage); 


  return (
    <ul className="flex flex-col gap-8">
      {filteredUsers?.map((user) => {
        return (
          <li key={user.id}>
            <div className="px-4 py-4 max-w-[700px] min-w-[500px] flex items-center justify-between bg-[#1E2A47] rounded-md shadow-xl">
              <h2 className="text-white font-bold text-xl font-mono">
                {user.login}
              </h2>
              <img className="w-20 h-20 rounded-full" src={user.avatar_url} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
