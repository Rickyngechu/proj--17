import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/:country" element={<CountryPage />} />
          {/* <Route path="/:country/:country" element={<CountryPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
