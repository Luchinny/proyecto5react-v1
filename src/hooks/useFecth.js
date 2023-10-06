import axios from "axios"
import { useState } from "react"

const useFecth = (url) => {
  
const [InfoApi, setInfoApi] = useState()

const getApi = () => {
    axios.get(url)
    .then(res => setInfoApi(res.data))
    .catch(err => console.log(err))
}

    const getTypeApi = (urlType) => {
    axios.get(urlType)
    .then(res =>  {
        res.data
        const obj = {
            results: res.data.pokemon.map(e => e.pokemon)
        }
        setInfoApi(obj)
        })
    .catch(err => console.log(err))
    }

return [ InfoApi, getApi, getTypeApi ]

}

export default useFecth
