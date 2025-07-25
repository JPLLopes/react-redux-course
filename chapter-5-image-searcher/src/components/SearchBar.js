import { useState } from 'react'
import './SearchBar.css' 

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    
    onSubmit(term)
  }

  return <div className='search-bar'>
    <form onSubmit={handleFormSubmit}>
      <label>Enter search term</label>
      <input value={term} onChange={(event) => setTerm(event.target.value)}/>
    </form>
  </div>
}

export default SearchBar