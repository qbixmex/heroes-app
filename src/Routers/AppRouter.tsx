import { BrowserRouter, Route, Routes } from "react-router-dom"
import DCScreen from '../Components/DC/DCScreen';
import LoginScreen from "../Components/Login/LoginScreen";
import MarvelScreen from '../Components/Marvel/MarvelScreen';
import SearchScreen from "../Components/Search/SearchScreen";
import { Navbar } from '../Components/UI/Navbar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/dc" element={<DCScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter
