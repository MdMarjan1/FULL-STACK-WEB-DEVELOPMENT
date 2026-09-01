import "./App.css";

function App() {
  return (
    <>
      <h1>Get started</h1>
      <One></One>
      <Number></Number>
      <Person></Person>
      <Studentin></Studentin>
      <Studentin></Studentin>
      <Studentin></Studentin>
      <Model></Model>
      <Model></Model>
      <Medicine></Medicine>
    </>
  );
}

function One() {
  return <h1>Hatir-zil</h1>;
}

function Number() {
  return (
    <>
      <h1>313</h1>
      <h2>1971</h2>
      {/* daynamic expressions */}
      <h3>sum={100 + 50}</h3>
    </>
  );
}

function Person() {
  const role = "Programmer";
  const price = 45;
  return (
    <>
      <p>Superman</p>
      <p>IronMan</p>
      <p>{role}</p>
      <p> fish {price}</p>
      <img src="../doraemon-house-wallpapers.png" alt="" />
    </>
  );
}

function Studentin() {
  return (
    <div className="colors">
      <h3>Mobile</h3>
      <h3>I phone</h3>
      <h4>Tablet</h4>
    </div>
  );
}

function Model() {
  const modelStyle = {
    color: "orange",
    fontSize: "25px",
    backgroundColor: "red"
  };
  return (
    <div style={modelStyle}>
      <h4>Guci</h4>
      <h3>Prada</h3>
      <h3>Luis vuton</h3>
    </div>
  );
}

//  not working
function Medicine() {
  return (
    <div style={{
        color: "orange",
        fontSize: "25px",
      }}>
      <h1>KIKOK</h1>
    </div>
  );
}

export default App;
