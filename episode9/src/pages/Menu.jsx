import { useContext } from "react";
import { AppContext } from "../App";


export const Menu = () => {
    const{username} = useContext(AppContext)
    return <h1>This is Menu Page for {username}</h1>
}