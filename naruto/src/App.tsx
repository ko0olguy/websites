import NavBar from "./components/navbar"
import { RandomCharacterList } from './components/characters'
import { ThemeProvider } from "@/components/theme-provider"

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


