import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFecth from '../hooks/useFecth'
import './styles/pokemonIdCard.css'



const PokedexIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [poke, getPoke] = useFecth(url)
  useEffect(() => {
    getPoke()
  }, [id])
  console.log(poke);
   const fistStat = poke?.types[0].type.name

  return (
    <>
   
    <article className={`idCard ${fistStat}-bodyColor` }>
    {/* <div className='image'> 
    <img className='headerId__image' src="/images/logo-poke.png" alt=""  />
    </div> */}
   
      <header className={`idCard__header ${fistStat}-cardColor`}>
         <img className='idCard__image' src={poke?.sprites.other[`official-artwork`].front_default} alt="" />
      </header>
      
      <div className='idCard__containerId'>
      <h3 className={`idCard__id ${fistStat}-idColor`}>#️{poke?.id}</h3>
      <h2 className={`idCard__name ${fistStat}-nameColor`}>{poke?.name} <hr className='idCard__splas'/> </h2>
      </div>
      <section className='idCard__body'>
        <ul className='idCard__properties'>
          <p>height</p>
           <p>weight</p>
          <span className='idcard__properties_measures'>{poke?.height}</span>
          <span className='idcard__properties_measures'>{poke?.weight}</span>
        </ul>
      </section>

      <div className='idCard__containerType'>
        <section>
           <h4 className='idCard__type' >Type</h4>
          <ul className='idCard__infoType' >
            
            {
              poke?.types.map(typeInfo => (
                <li className={`idCard__infoType__name ${fistStat}-typeColor`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
          
        </section>
        <section >
          <h4 className='idCard__stat'>Ability</h4>
          <ul className='idCard__infoAbility'>
          
            {
              poke?.abilities.map(abilitiesInfo => (
                <li className='idCard__infoAbility__name' 
                key={abilitiesInfo.ability.url}>{abilitiesInfo.ability.name}</li>
              ))
            }
         
          </ul>
          
        </section>
      </div>
      <section className='idCard__stats'>
        <h2 className='idCard__title'>Stats</h2>
        <ul className='idCard__infoStats'>
          
          {
            poke?.stats.map(statInfo =>(
          <li className='idCard__infoStats__stat' key={statInfo.stat.url}>
            <h4 className='idCard__infoStats__name'>{statInfo.stat.name}</h4>
            <span className='idCard_-infoStats__base'>{statInfo.base_stat}</span>
          </li>))}
        </ul>
        </section>
      </article>
        <article className='idCard__moves'>
          <ul className='idCard__infoMoves'>
            {
              poke?.moves.map(moveInfo =>(
                <li className='idCard__move__value' key={moveInfo.move.url}>
                  <h6 className='idCard__move__name'>{moveInfo.move.name}</h6>
                </li>
              ))
            }
          </ul>
        </article>
    </>
  )
}

export default PokedexIdPage