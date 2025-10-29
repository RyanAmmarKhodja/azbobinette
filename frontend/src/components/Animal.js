import { useEffect, useState } from "react";
import api from "./api";

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
        {animals.map(a => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;
