import { useState, useEffect } from "react"

const Info = (props) => {

    const [data, setData] = useState('')

    const handler = async () => {
        let response = await fetch(props.url)
        let pokemon = await response.json()
        setData(pokemon)
    }
    useEffect(() => {
        handler()
    }, [])
    return (
        <div>
              {data ? 
                <h1>{data.name}</h1>
             : 
                <h1>Loading...</h1>
            }
          
        </div>
    )
   
}
export default Info