import { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "./ChangeProfile"

export const Profile = () => {
  const{username,setusername} = useContext(AppContext)
  
  return (
    <div>
      <h1>This is Profile Page for {username}</h1>
      <ChangeProfile setusername={setusername}/>
      
    </div>
  )
}
