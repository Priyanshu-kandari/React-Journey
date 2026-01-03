type Country = "Brazil" | "Canada" | "India";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export const Person = ({
  name,
  email,
  age,
  isMarried,
  friends,
  country,
}: Props) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Age: {age}</h1>
      <h1>This person {isMarried ? "is" : "is not"} married</h1>

      {friends.map((friend, index) => (
        <h1 key={index}>{friend}</h1>
      ))}

      <h1>{country}</h1>
    </div>
  );
};
