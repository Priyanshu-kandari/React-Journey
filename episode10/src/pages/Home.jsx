import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data: catData, isLoading, error,refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  const { username } = useContext(AppContext);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error fetching data</h1>;

  return (
    <div>
        <h1>
      This is Home Page, How are you {username} 😺  
      <br />
      Cat fact: {catData.fact}
    </h1>
    <button onClick={refetch}>New Fact</button>
    </div>
  );
};
