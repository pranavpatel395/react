import React, { useEffect, useState } from 'react'

const TimeCompo = () => {
  const [second ,  setSecond] = useState(0)

  useEffect(() => {
    console.log("time Executed");
    
    const intervalId = setInterval(()=>{
      setSecond(prevSecond => prevSecond+1)
    }, 1000)
  
    return () => {
      console.log("Time Stop");
      
      clearInterval(intervalId)
    }
  }, [])
  


  return (
    <div>

      <h1>Second : {second}</h1>
      
    </div>
  )
}

export default TimeCompo
