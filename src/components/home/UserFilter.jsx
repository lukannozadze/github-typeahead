import { memo, useRef } from "react";
import { useContextProvider } from "@/providers/Provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function UserFilter({ usersNumber }) {
  const {setUsersPerPage} = useContextProvider();

  const calculateUserValue = () => {
    const selectItemsArr = [];
    let incrementedUsers = 5;
    const itemNumber = Math.round(usersNumber / 5);

    for (let i = 0; i < itemNumber; i++) {
      selectItemsArr.push(incrementedUsers);
      incrementedUsers += 5;
    }

    if(usersNumber%5!==0){
      selectItemsArr[itemNumber-1] = usersNumber;
    }
    return selectItemsArr;
  };

  const valuesArr = usersNumber>=5 ? calculateUserValue():null;
  const handleChange = (value) =>{
    setUsersPerPage(value);
  }

  
  return (
    <>
      {valuesArr && <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Users On The Page" />
        </SelectTrigger>
        <SelectContent>
          {valuesArr?.map((val) => (
            <SelectItem key={val.toString()} value={val}>{val}</SelectItem>
          ))}
        </SelectContent>
      </Select>}
    </>
  );
}
export default memo(UserFilter);
