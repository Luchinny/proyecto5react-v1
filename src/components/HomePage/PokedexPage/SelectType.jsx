import { useEffect } from "react"
import useFecth from "../../../hooks/useFecth"
import './styles/pokemonCard.css'
const SelectType = ( { setSelectType } ) => {

    const url = `https://pokeapi.co/api/v2/type`
    const [ types, getTypes ] = useFecth(url)

    useEffect(() => {
        getTypes()
    }, [])

    const hanledChange = e => { 
        setSelectType(e.target.value); 

    }

  return (
    <div className="pokedex_types" >
        <select onChange={hanledChange}>
            <option value="AllPokemons">AllPokemons</option>
            {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectType
