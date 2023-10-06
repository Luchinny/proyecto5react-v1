import React, { useEffect } from 'react'
import useFecth from '../../../hooks/useFecth'
import { useNavigate } from 'react-router-dom'
import './styles/pokemonCard.css'

const PokemonCard = ({ url }) => {

    const [poke, getPoke] = useFecth(url)
    const navigate = useNavigate()

    useEffect(() => {
        getPoke()
    }, [])

    const handleNavigate = () => {
        navigate(`/pokedex/${poke.id}`)
    }
    const fisrtType = poke?.types[0].type.name
    
    return (
        <>
        <article className= {`pokeCard ${fisrtType}-border`} onClick={handleNavigate}>
            <header className={`pokeCard__header ${fisrtType}-gradient`}>
                <img className={`pokeCard__image`} src={poke?.sprites.other[`official-artwork`].front_default} alt="" />
            </header>
            <section className='pokeCard__body'>
                <h3 className={`pokeCard__name ${fisrtType}-color`}>{poke?.name}</h3>
                <ul className='pokeCard__types'>
                    {
                   poke?.types.map(typeInfo => (
                    <li className='pokeCard__typeName' key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                    }
                </ul>
                <hr className='pokeCard__hr' />
                <ul className='pokeCard__stats'>
                    {
                    poke?.stats.map(statInfo => (
                        <li className='pokeCard__stat' key={statInfo.stat.url}>
                            <h4 className='pokeCard__stat__name'>{statInfo.stat.name}</h4> 
                            <span className={`pokeCard__stat__value ${fisrtType}-statColor`}>{statInfo.base_stat}</span>
                        </li>
                    ))
                    }
                </ul>
            </section>
        </article>
        </>
    )
}

export default PokemonCard
