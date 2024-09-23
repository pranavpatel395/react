import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loggercomponent from './cop/Loggercomponent'
import TimeCompo from './cop/TimeCompo'
import FetchData from './cop/FetchData'
import WindowResize from './cop/WindowResize'


function App() {
  // const [count , setCount] = useState(0)
  // const [totle, setTotle] = useState(1)

  // useEffect(() => {
  //   alert("this is render every time ")
  // }, )

  // useEffect(() => {
  //   alert("This is render only one time ")
  // }, [])
  
  // useEffect(() => {
  //   alert("this is render only count is updated")
  // }, [count])

  // useEffect(() => {
  //   alert("this is render on both will updated")
  // }, [count , totle])
  
    // useEffect(() => {
    //   alert("this is render")
    //   return () => {
    //     alert("the count will be unwonted")
    //   }
    // }, [count])
    

  // function handleClick(){
  //   setCount(count+1)
  // }
  // function handleClicktotle(){
  //   setTotle(totle+1)
  // }


  return (
    <div>
      <WindowResize/>

      {/* <FetchData/> */}
      {/* <TimeCompo/> */}

      {/* <Loggercomponent/> */}

      {/* <h1>You click {count} times</h1>
    <button onClick={handleClick}>Click me </button>

    <h1>You click {totle} times</h1>
    <button onClick={handleClicktotle}>Click me </button> */}
    
    </div>
  )
}

export default App
