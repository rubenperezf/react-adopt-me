import React, {useState} from 'react'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, setLocation] = useState('San Francisco, CA')
    const [animal, setAnimal] = useState('dog')
    return (
    <div className="search-params">
        
        <label htmlFor="location">
            Location
            <input 
            id="location"
            value={location}
            placeholder="Please enter location"
            onChange={e => setLocation(e.target.value)}
            />
        </label>

        <label htmlFor="animal">
            Animal
            <select id="animal" value={animal} 
            onChange={e=>setAnimal(e.target.value)}
            onBlur={e=>setAnimal(e.target.value)}
            >
                <option />
                {
            ANIMALS.map(animal => (
            <option key={animal} value={animal}>
                {animal}</option>
                ))}
                
            </select>
        </label>
        <button>Submit</button>
    </div>
    )
}

export default SearchParams
