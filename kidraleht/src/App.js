import NavigationBar from "./components/NavigationBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Single from "./pages/Single";
import { Route, Routes } from "react-router-dom";
import Akordid from "./pages/posts/Akordid";
import Haalestamine from "./pages/posts/Haalestamine";
import CountryRoads from "./pages/posts/CountryRoads";
import KaugesKylas from "./pages/posts/KaugesKylas";
import BarreAkordid from "./pages/posts/BarreAkordid";
import Noodid from "./pages/posts/Noodid";
import SevenNationArmy from "./pages/posts/SevenNationArmy";
import Mollpentatoonika from "./pages/posts/Mollpentatoonika";
import ToonikaJaImpro from "./pages/posts/ToonikaJaImpro";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='' element={ <Home /> } />
        {/* <Route path='post/:id' element={ <Single /> } /> */}
        <Route path='contact' element={ <Contact /> } />
        <Route path='*' element={ <NotFound /> } />
        <Route path="post/haalestamine/:id" element={<Haalestamine />} />
        <Route path="post/akordid/:id" element={<Akordid />} />
        <Route path="post/country-roads/:id" element={<CountryRoads />} />
        <Route path="post/kauges-kylas/:id" element={<KaugesKylas />} />
        <Route path="post/barre=akordid/:id" element={<BarreAkordid />} />
        <Route path="post/noodid/:id" element={<Noodid />} />
        <Route path="post/seven-nation-army/:id" element={<SevenNationArmy />} />
        <Route path="post/mollpentatoonika/:id" element={<Mollpentatoonika />} />
        <Route path="post/toonika-ja-impro/:id" element={<ToonikaJaImpro />} />
      </Routes>
    </div>
  );
}

export default App;
