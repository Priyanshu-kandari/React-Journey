import { useQuery } from "@tanstack/react-query"
import axios from "axios";



export const useGetFact = () => {
    const { data, isLoading, error , refetch} = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  return{data,isLoading, error, refetch}
}