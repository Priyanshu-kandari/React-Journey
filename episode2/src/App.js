import './App.css';

function App (){
  return(
    <div className='App'>
      <Jobs company = "Google" position = "SDE1" salary = "$10,000" />
      <Jobs company = "Microsoft" position = "SDE2" salary = "$20,000" />
      <Jobs company = "Amazon" position = "SDE3" salary = "$30,000" />
    </div>
    
  )
}

const Jobs = (props)=>{
  return(
    <div>
    <h1>{props.company}</h1>
    <h2>{props.position}</h2>
    <h3>{props.salary}</h3>
    </div>
  )

}

export default App