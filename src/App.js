import React, { useEffect, useState } from "react"
import Card from "./Card"
import "./global.css"

const App = () => {
  const [data, setData] = useState([])
  // the value at first is just an empty array

  const fetchHandler = async () => {
    try {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      let pokeapi = await response.json()
      setData(pokeapi.results)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchHandler()
  }, [])
// when component is mounted it runs whats below
 
    return (
      <div>
      <h1>My app</h1>
      <button onClick={fetchHandler}>Click</button>
      {data.map((item, index) => {
       return  <Card key={index} url={item.url} /> 
      })}
        
    </div>
    )
  //button fetch handler shows the items being mapped through
}

      
export default App
