import React from 'react'

const JsBasics = () => {
    const a = "food"
    const b = true
  return (
    <div style ={{marginLeft: "50px", marginRight: "50px", marginBottom: "100px", marginTop:"100px", border: "1px solid black"}}>
        <h1>JsBasics</h1>
        <h2>{a}</h2> <h3>{b ? "full" : "hungry"}</h3>
    </div>
  )
}

//js logical functions 
/*
{X.map((x1)=>(<div key={x1.id}></div>))}

function del = (id) => {

}


*/

export default JsBasics