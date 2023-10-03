import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./components/ui/card"
import "./App.css"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { wrap } from "popmotion";
import NavBar from "./components/navbar"


const jutsuVariants = {
  initial: {
    y: 1000
  },
  animate: {
    y: 0
  },
  exit: {
    y: 1000
  },
  transition: {
    type: "tween"
  }
}

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

type Character = {
  id: string;
  name: string;
  images: string[];
  jutsu: string[];
};

const CharacterCard = ({ character }: {character: Character}) => {
  const { name, images, jutsu } = character;
  const [expandedJutsus, setExpandedJutsus] = useState(false);
  const limitedJutsus = Array.isArray(jutsu) ? jutsu.slice(0, 4) : [];
  const displayJutsus = expandedJutsus ? jutsu : limitedJutsus;

  return (
      <motion.div className='justify-center flex-wrap mx-auto min-w-max mt-8 character-card'>
        <Card className='justify-center flex-wrap min-h-max text-center'>
          <div className="border p-4 m-4 content-center">
            <CardHeader>
              <CardTitle className='text-lg font-semibold mb-5'>{name}</CardTitle>
            </CardHeader>
            <CardContent className='grid justify-center'>
              {Array.isArray(images) && images.map((image, index) => (
                <img key={index} src={image} alt={`${name}-image-${index}`} className="w-full h-64 object-cover mb-5 rounded-md" />
              ))}
              {Array.isArray(displayJutsus) && jutsu ? (
                <CardDescription>
                  <h4 className="text-sm font-semibold mb-2 mt-2">Jutsus:</h4>
                  <ul className="my-0 py-2 list-none">
                    {displayJutsus.map((juts, index) => (
                      <motion.li variants={jutsuVariants} initial='initial' animate='animate' exit='exit' transition={{ type: "tween" }} key={index}>{juts}</motion.li>
                    ))}
                  </ul>
                  {jutsu.length > 4 ? (
                    <button onClick={() => setExpandedJutsus(!expandedJutsus)}>
                      {expandedJutsus ? 'Collapse Jutsus' : 'Expand Jutsus'}
                    </button>
                  ): null}
                </CardDescription>
              ) : <CardDescription>No Known Jutsus</CardDescription>}
            </CardContent>
            <CardFooter>
            </CardFooter>
          </div>
        </Card>
      </motion.div>
  );
};


  const RandomCharacterList = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [[cardsIndex, direction], setCardsIndex] = useState([0, 0]);
    const paginate = (newDirection: number) => {
      setCardsIndex([cardsIndex + newDirection, newDirection]);
    };
    const cardIndex = wrap(0, characters.length, cardsIndex);

    useEffect(() => {
      const fetchRandomCharacters = async () => {
        try {
          const data = await getRandomCharacters();
          setCharacters(data.characters);
          setCardsIndex([0, 0]);
        } catch (error) {
          console.log('Error fetching random characters:', error);
        }
      };
  
      fetchRandomCharacters();
    }, []);
  
    if (characters.length === 0 || !characters[cardIndex]) {
      return null; 
    }
  
    const variants = {
      enter: (direction: number) => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        };
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1
      },
      exit: (direction: number) => {
        return {
          zIndex: 0,
          x: direction < 0 ? 1000 : -1000,
          opacity: 0
        };
      }
    };
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
      return Math.abs(offset) * velocity;
  };
    return (
      <AnimatePresence initial={false} custom={direction}>
        <div className='justify-center w-100 m-auto'>
          <motion.div
            key={cardIndex}
            className="flex overflow-x-auto"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              e.preventDefault();
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <CharacterCard
              key={characters[cardIndex].id}
              character={characters[cardIndex]}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    );
  };
  

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <body className='min min-h-screen bg-background'>
        <NavBar/>
        <div className='bg-background'>
          <RandomCharacterList />
        </div>
      </body>
    </ThemeProvider>
  );
}


