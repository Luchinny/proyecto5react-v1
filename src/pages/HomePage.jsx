import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slace"
import { useDispatch, } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./styles/homePage.css"

const HomePage = () => {


 const inputTrainer = useRef() 
 const dispacth = useDispatch()
 const navigate = useNavigate()
 const handleTrainer = e => {
    e.preventDefault()
    dispacth(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate(`/pokedex`)
 }

  return (
    <>
    <section >
     
</section>
<article className="home__card">
<img className="home__imageLogo" src="/images/logo-pokeBlanco.png" alt="" /> 
    <div>
    <h2 className="home__trainer">¡Hello Trainer!</h2>
    <p className="home__text">To start, please enter your trainer nickname</p>
    <form onSubmit={handleTrainer} placeholder="Enter a trainer name">
      <input className="home__search" ref={inputTrainer} type="text" />
      <button className="home__start" >Start!</button>
    </form>
  </div>
  
  </article>
  <section>
  <img className="home__imagePokeboll" src="/images/pokeboll.png" alt="" />
  </section>
  </>
  )
}

export default HomePage
