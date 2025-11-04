import React from 'react'

const AddAnimal = () => {
  return (
    <div>
        
        Welcome to the Add Animal page.
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required />
          </div>
          <div>
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" required>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="horse">Horse</option>
            </select>
          </div>
          <button type="submit">Add Animal</button>
        </form>
    </div>
  )
}

export default AddAnimal