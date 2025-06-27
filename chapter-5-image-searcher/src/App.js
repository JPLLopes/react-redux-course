import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

const App = () => {
  const [images, setImages] = useState([])

  const handleOnSubmit = async (term) => {
    let images = await searchImages(term)

    setImages(images)
  }

  return <div>
    <SearchBar onSubmit={handleOnSubmit}/>

    <ImageList images={images}/>
  </div>
}

export default App