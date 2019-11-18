import React from 'react'
import {render} from 'react-dom'
//import Pet from './Pet'
import SearchParams from './SearchParams'
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
            
        </div>
    )
}



//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, 'Adopt Me!'),
//     React.createElement(Pet, { name: 'Tom', animal: 'Cat', breed: 'Tabby' }),
//     React.createElement(Pet, { name: 'Jerry', animal: 'Cat', breed: 'Tabby' }),
//     React.createElement(Pet, {name: 'Pretty Boy',animal: 'Bird',breed: 'Parakeet'})
//   ])


render(<App />, document.getElementById('root'))
