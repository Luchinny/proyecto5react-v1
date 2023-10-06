import { useSelector } from "react-redux"
import useFecth from "../hooks/useFecth";
import { useEffect, useState } from "react";
import PokemonCard from "../components/HomePage/PokedexPage/PokemonCard";
import { useRef } from "react";
import SelectType from "../components/HomePage/PokedexPage/SelectType";
import './styles/homePage.css'


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectedType, setSelectedType] = useState('AllPokemons')


  const trainer = useSelector(store => store.trainer)
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000'
  const [pokemons, getPokemons, getTypePokemon] = useFecth(url)

  const inputSearch = useRef()

  useEffect(() => {
    getPokemons()
    if (selectedType === 'AllPokemons') {
      getPokemons()
    } else {
      getTypePokemon(selectedType)
    }
  }, [selectedType])

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(pokemon => pokemon.name.includes(inputValue))

  const [currentPage, setCurrentPage] = useState(1)
  const pokePerPage = 16
  const lastIndex = pokePerPage * currentPage
  const firstIndex = lastIndex - pokePerPage
  const pokePaginate = pokemons?.results.slice(firstIndex, lastIndex );

  // console.log(firstIndex);


  return (
    <>
    <img className="pokedex__img" src="/images/pokedex.png" alt="" />
    
      <div className="pokedex__home">
        <p className="pokedex__name">Hello {trainer }, <span className="pokedex__text">Here you cant find your favirite pokemon</span></p>
        <section className="pokedex__container">
        <form onSubmit={handleSearch}>
          <input className="pokedex__select" ref={inputSearch} type="text" />
          <button className="pokedex__search">Search</button>
        </form>
        <SelectType
          setSelectType={setSelectedType}
        />
        </section>
      </div>
      <div className="pokedex__card">
        {
          pokePaginate?.map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
      <section className="pokedex__change">
       
        <button className="pokedex__previus" onClick={() => setCurrentPage(currentPage - 1)}>Previus</button>
        <button className="pokedex__next" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </section>
    </>
  )
}

export default PokedexPage
