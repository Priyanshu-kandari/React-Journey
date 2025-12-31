import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function ChangeProfile(){
    
  const{setusername} = useContext(AppContext)
  const [newUsername, setNewUsername] = useState("")

  const handleSubmit = () => {
    if (newUsername.trim() === "") return
    setusername(newUsername)
    setNewUsername("")
  }
    return(
        <div>
            <input
        type="text"
        placeholder="ex: Priyanshu"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />

      <button onClick={handleSubmit}>Log in</button>
        </div>
    )
}

export default ChangeProfile

