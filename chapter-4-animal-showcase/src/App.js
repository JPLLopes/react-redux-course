import { useState } from 'react'
import AnimalShow from './AnimalShow'

import './App.css'

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
  const [animals, setAnimals] = useState([])

  const renderedAnimals = animals.map((animal, i) => {
    return <AnimalShow type={animal} key={i}/>
  }) 

  return <div className='app'>
    <button 
      onClick={() => setAnimals([...animals, getRandomAnimal()])}>
        Add animal
    </button>

    <div className='animal-list'>{renderedAnimals}</div>
</div>
}

export default App