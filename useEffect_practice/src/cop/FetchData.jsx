import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [data , setData] = useState()
  const [loding , setLoding] = useState(true)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
      setData(data)
      setLoding(false)
    })

  }, [])
  

  return (
    <div>

      <h1>
        {loding ? (
          <h1>Loding...</h1>

        ):(
          <ul>
            {data.map(post => (
              <li key = {post.id}>{post.title}</li>
            ))}
          </ul>

        )}
      </h1>
      
    </div>
  )
}

export default FetchData
