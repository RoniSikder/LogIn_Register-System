import React from 'react'

export const Home = ({setare}) => {
  return (
    <div className="container">
      <div className="subContainer" style={{margin:"2px solid red",borderRadius:"10px"}}>
        <h1>So Hello , {setare.namea}</h1>
      </div>
    </div>

  )
}
