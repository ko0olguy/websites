import NavBar from "./components/navbar"
import { RandomCharacterList } from './components/characters'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About"

export default function App() {
  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <body className='min-h-screen bg-background'>
            <NavBar/>
              <Routes>
                <Route path="/home" element={<RandomCharacterList/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
          </body>
        </Router>
      </ThemeProvider>
  );
}


