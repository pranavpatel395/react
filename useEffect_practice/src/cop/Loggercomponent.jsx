import React, { useState, useEffect } from 'react'

const Loggercomponent = () => {

  const [count , setCount] = useState(0)

  useEffect(() => {
  console.log("This is render On every time ");
  
  }, )
  

  function handleClick(){
    setCount(count+2)
  }



  return (
    <div>
      <h1>You Click {count} times </h1>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Loggercomponent
