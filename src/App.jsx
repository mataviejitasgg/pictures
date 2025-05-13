import { useState } from 'react'
import reactLogo from './componets/SearchBar'
import viteLogo from "./componets/ImageList"
import './api'
import searchImages from './api'

function App() {
  const [count, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log("Usted esta buscando con: ", term)
    const result = await searchImages(term)
    setImages(result)
   }

  return (
    <>
    <h1>Pictures App</h1>
    <searchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}

export default App
