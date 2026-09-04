import Todo from "./components/Todo"
import Sum from "./components/sum"
import Tasks from "./components/condition"
import Terner from "./components/ternery"
import Polixei from "./components/&&and"
import Orrop from "./components/orreact"
import Book from "./components/arreyMaping"
import User from "./components/Users"






function App(){
  const books = ['Biology', 'chemistry', 'Math', 'HigherMath', 'bangla']

  return(
    <>
    {
      books.map(book => <Book name={book}></Book>)
    }



  
    <Todo task = "Practice Problem" time= "5.00"></Todo>
    <Todo task = "JavaScript" time= "7.12"></Todo>
    <Todo task = "python" time= "4.23"></Todo>
    <Todo task = "no social media today"></Todo>

    <Sum name= "Bangladesh" ></Sum>

    <Tasks name="finish module" isValue={false} ></Tasks>
    <Tasks name="finish module" isValue={true} ></Tasks>

    <Terner truthy={true} role="rifat"></Terner>
    <Terner truthy={false} role="rifat"></Terner>

    <Polixei present= {true} status="police1"></Polixei>
    <Polixei present= {false} status="police2"></Polixei>

    <Orrop present= {true} status1="woman"></Orrop>




    <User></User>







  
   
    </>
  )
}

export default App
