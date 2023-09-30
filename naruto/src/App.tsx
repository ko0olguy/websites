import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./components/ui/card"
import "./App.css"
import { motion } from "framer-motion"

const baseURL = 'https://dattebayo-api.onrender.com/';
var randomNumber = Math.floor(Math.random() * 285) + 1;
const api = axios.create({
  baseURL,
});

const getRandomCharacters = async (limit = 5) => {
  try {
    const response = await api.get('/characters', {
      params: {
        page: randomNumber,
        limit,
      } ,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching random characters:', error);
    throw error;
  }
};

const CharacterCard = ({ character }) => {
  const { name, images, jutsu } = character;
  return (
    <motion.div className='justify-center flex-wrap mx-auto min-w-max mt-8 character-card' initial={{ x: 10000 }} animate={{ x: 0 }}>
      <Card className='justify-center flex-wrap min-h-max'>
        <div className="border p-4 m-4 content-center">
          <CardHeader>
            <CardTitle className='text-lg font-semibold mb-5'>{name}</CardTitle>
          </CardHeader>
          <CardContent className='grid justify-center'>
            <img src={images} alt={name} className="w-full h-64 object-cover mb-5" />
            {Array.isArray(jutsu) && (
              <CardDescription>
                <h4 className="text-sm font-semibold mb-2 mt-2">Jutsus:</h4>
                <ul className="my-0 py-2 list-none">
                  {jutsu.map((juts, index) => (
                    <li key={index}>{juts}</li>
                  ))}
                </ul>
              </CardDescription>)}
            </CardContent>
            <CardFooter>
              {/* Add any additional footer content if needed */}
            </CardFooter>
        </div>
      </Card>
    </motion.div>
    
  );
};

const RandomCharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const fetchRandomCharacters = async () => {
      try {
        const data = await getRandomCharacters();
        setCharacters(data.characters);
      } catch (error) {
        console.log('Error fetching random characters:', error);
      }
    };

    fetchRandomCharacters();
  }, []);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + characters.length) % characters.length
    );
  };

  return (
    <div className="flex overflow-x-auto relative">
      {characters.length > 0 && (
        <CharacterCard
          key={characters[currentCardIndex].id}
          character={characters[currentCardIndex]}
        />
      )}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-500 p-2 rounded"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-500 p-2 rounded"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Naruto Characters</h1>
      <RandomCharacterList />
    </div>
  );
}

