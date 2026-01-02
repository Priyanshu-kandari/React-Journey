import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";

export const Menu = () => {
  const { username } = useContext(AppContext);

  const { data: catData, isLoading, error } = useQuery({
    queryKey: ["cat"], // SAME KEY
    enabled: false,    // ⛔ prevents refetch
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <h1>This is Menu Page for {username}</h1>
      <p>Cat fact: {catData?.fact}</p>
    </div>
  );
};
