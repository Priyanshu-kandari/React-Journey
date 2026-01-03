import { Person } from "./Person";
import "./App.css";

function App() {
  return (
    <>
      <Person
        name="Priyanshu"
        email="priyanshukandari@gmail.com"
        age={18}
        isMarried={true}
        friends={["Kunal", "Raman", "Jatin"]}
        country="India"
      />
    </>
  );
}

export default App;
