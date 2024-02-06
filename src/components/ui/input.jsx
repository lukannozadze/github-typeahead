import * as React from "react";
import { cn } from "@/lib/utils";
import { useContextProvider } from "../../providers/Provider";
import useMakeRequest from "@/helpers/makeRequest";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue);
  const result = useMakeRequest(
    "https://api.github.com/search/users?q=",
    debouncedValue
  );
  const { setValue } = useContextProvider();

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      value={inputValue}
      type={type}
      onChange={inputChangeHandler}
      className={cn(
        "flex h-10 w-[33%] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
