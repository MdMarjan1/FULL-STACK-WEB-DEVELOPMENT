import './App.css'

function App() {
 

  return (
    <>
          <h1>Get started</h1>
          <Country></Country>
          <Sum></Sum>
      
   </>
  )
}



function Country(){
  return(
    <>
      <h1>Bangladesh</h1>
      <h2>Germany</h2>
      <h3>Norway</h3>
      <p>Marjan Tarjan</p>
    </>
  )
}


//component
function Sum(){
  let price = 1000
  
 return(
    <>
      <p>sum={4+5}</p>
      <p>sum</p>
      <p>price={price}</p>
      
    </>
 )
}

export default App


