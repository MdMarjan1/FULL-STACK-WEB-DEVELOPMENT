
import './App.css'

function App() {
 

  return (
    <>
          <h1>Get started</h1>
          <One></One>
          <Number></Number>
          <Person></Person>
       
    </>
  )
}

function One(){
  return <h1>Hatir-zil</h1>
}


function Number(){
  return (
    <>
    <h1>313</h1>
    <h2>1971</h2>
    {/* daynamic expressions */}
    <h3>sum={100+50}</h3>   
    </>
  )
}


function Person(){
  const role = "Programmer"
  const price = 45
  return(
    <>
    <p>Superman</p>
    <p>IronMan</p>
    <p>{role}</p>
    <p> fish {price}</p>
    <img src="../doraemon-house-wallpapers.png" alt="" />
 
    </>
  )
}

export default App
