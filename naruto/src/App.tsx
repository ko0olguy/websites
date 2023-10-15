import NavBar from "./components/ui/navbar"
import { RandomCharacterList } from './components/characters'
import { ThemeProvider } from "@/components/ui/theme-provider"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About"

export default function App() {
  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <body className='min-h-screen bg-background'>
            <NavBar/>
              <Routes>
                <Route path="/" element={<RandomCharacterList/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
          </body>
        </Router>
      </ThemeProvider>
  );
}


