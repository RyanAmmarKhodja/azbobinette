import { useEffect, useState } from "react";
import api from "../api";

function Animal() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    api.get("/animals")
       .then(res => setAnimals(res.data))
       .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Animals</h1>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Animal;
