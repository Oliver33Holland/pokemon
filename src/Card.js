import { useState, useEffect } from "react"

const Card = (props) => {

    const [pokemon, setPokemon] = useState('')

    const handler = async () => {
        let response = await fetch(props.url)
        let data = await response.json()
        setPokemon(data)
    }
    useEffect(() => {
        handler()
    }, [])
    return (
        <div>
              {pokemon ? 
                <img src={pokemon.sprites.front_default} alt="Pokemon" />
             : 
                <h1>Loading...</h1>
            }
        </div>
    )
    //condintonal rendering for pokemon images
}
export default Card