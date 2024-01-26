import NavigationBar from "./components/NavigationBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Single from "./pages/Single";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='' element={ <Home /> } />
        <Route path='post/:id' element={ <Single /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
