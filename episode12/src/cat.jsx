import { useGetFact } from "./useGetFact";

export const Cat = () => {
    const{ data, isLoading, error , refetch} = useGetFact()

    if(isLoading) return <h1>Loading..</h1>;
    if(error) return <h1> error..</h1>;

    return(
        <div>
            <h1>{data.fact}</h1>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}



