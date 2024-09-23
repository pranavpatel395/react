import React, { useEffect, useState } from 'react'

const WindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const resizeWindow = ()=> setWindowWidth(window.innerWidth)
      console.log("event listenet is add");
      

      window.addEventListener("resize" , resizeWindow)
    
      return () => {
        console.log("Event listnere is remove")
        window.removeEventListener("resize" , resizeWindow)
      }
    }, [])
    

  return (
    <div>

      <h1>window size is {windowWidth}px</h1>
      
    </div>
  )
}

export default WindowResize
