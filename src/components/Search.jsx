import React from 'react'

// const person = {
//   name: 'Bruce Wayne',
//   age: 36,
//   location: 'Gotham City',
// };

// const { name, age, location } = person; // destructuring to extract properties from the person object
// console.log(name);

const Search = ({searchTerm, setSearchTerm}) => { // destructuring to extract searchTerm and setSearchTerm from props
  return (
    <div className="search">
        <div>
            <img src="./search.svg" alt="search" />
            <input 
              type="text" 
              placeholder="Search through thousands of movies"
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    </div>
  )
}

export default Search