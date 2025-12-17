import './App.css';
import {User} from'./User.js';

function App() {
  const age = 15;
  const isGreen = true;
  const names = ["Pedro","Jake","Jessica","Mike","Dustin"];
  const users = [
    { name: "Pedro", age:21},
    { name: "Huxn", age:11},
    { name: "Hitesh", age:26}
  ]

  return (
    <div className="App">
      {users.map((user,key) => (
        <User key={key} name={user.name}  age={user.age}/>
      ))}
    </div>
  );
}




export default App;
