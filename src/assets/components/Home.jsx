import axios from "axios";
import { useState } from "react";
import Card from "./Card";

export default function Home() {
  const [num, setNum] = useState(""); // guarda o número digitado
  const [characters, setCharacters] = useState([]); // guarda vários personagens

  // Função para buscar e adicionar personagem
  const fetchCharacter = () => {
    if (!num) return;
    axios
      .get(`https://rickandmortyapi.com/api/character/${num}`)
      .then((response) => {
        const newCharacter = response.data;

        // Evita duplicar o mesmo personagem
        const alreadyExists = characters.some((c) => c.id === newCharacter.id);
        if (!alreadyExists) {
          setCharacters([...characters, newCharacter]); // adiciona ao array
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Função para remover um personagem específico
  const handleRemove = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  };

  return (
    <div>
      {/* Input e Botão */}
      <div className="flex justify-center m-5 gap-4">
        <input
          type="number"
          name="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Escolha um número!"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          type="button"
          value="Enviar!"
          onClick={fetchCharacter}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 p-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        />
      </div>

      {/* Renderiza todos os cards */}
      <div className="m-12 p-4 flex justify-center flex-row flex-wrap gap-4">
        {characters.length === 0 ? (
          <p className="text-gray-500">Nenhum personagem adicionado</p>
        ) : (
          characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              image={character.image}
              handleRemove={handleRemove}
            />
          ))
        )}
      </div>
    </div>
  );
}
