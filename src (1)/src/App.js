import React, {useState} from "react";

function App() {
  return (
  <div className="border">
    Dobozok App
    <BoxComponent hatterszin="red" kezdetiszamlalo={0} width="100px" height="100px"/>
    <BoxComponent hatterszin="green" kezdetiszamlalo={1} width="100px" height="100px"/>
    <BoxComponent hatterszin="blue" kezdetiszamlalo={3} width="100px" height="100px"/>
  </div>
  );
}
function BoxComponent(props){
  const [szamlaloAllapota, ujSzamlaloAllopatBeallitasa] = useState(props.kezdetiszamlalo);
  return(
    <div
    style={{
      width: props.width,
      height: props.height,
      backgroundColor: props.hatterszin,
    }}

    className="p-2 m-5 rounded"

    onClick={()=>{
      ujSzamlaloAllopatBeallitasa((elozoAllapot)=>elozoAllapot+1);
    }}
    >
      <h1>{szamlaloAllapota}</h1>
      Doboz
    </div>
  )
}

export default App;
