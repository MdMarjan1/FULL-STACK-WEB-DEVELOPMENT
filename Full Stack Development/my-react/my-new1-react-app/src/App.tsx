
import './App.css'

function App() {
  return (
   <>
    <h1>React By Marjan</h1>
    <Price></Price>
    <Price></Price>
    <Total></Total>
    <Student name = "Marjan" age = {24} course="React"></Student>
   </>
  )
}
interface stud {
  name: string,
  age: number,
  course: string
}
function Student({name,age,course}:stud){
  return (
    <div>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
        <h2>Course:{course}</h2>
    </div>
  )
}



function Price() {
  return (
  <div style={{
    border:"2px solid red",
    margin: "9px",
    fontSize:"2rem"
  }}>
    <h1>Bangladesh</h1>
    <h2>Norway</h2>
    <h3>France</h3>
  </div>
  )
}

function Total() {
  const money = 653;
  return (
    <>
    <h4>sum = {45+21}</h4>
    <p>tk {money}</p>
    </>
  )
}

// css use on react





export default App


