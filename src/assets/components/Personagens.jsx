import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card"; // ajuste o caminho se necessário

const personas = [1, 7, 10, 826];

function Personagens() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${personas}`)
      .then((response) => {
        console.log("response.data:", response.data);
        setCharacters(response.data); // a API retorna array se passa vários IDs
      })
      .catch((err) => console.error("Erro ao buscar personagens:", err));
  }, []);

  return (
    <div className="m-12 p-4 flex justify-center flex-row flex-wrap gap-4">
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          image={character.image} // importante!
          handleRemove={() => console.log("Remover", character.id)}
        />
      ))}
    </div>
  );
}

export default Personagens;
