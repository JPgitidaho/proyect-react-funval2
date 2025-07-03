import { useState } from "react";
import Header from "../componentes/Header";
import NavButtons from "../componentes/NavButtons";
import Gallery from "../componentes/Gallery";
import SearchBar from "../componentes/SearchBar";

export default function Home() {
  const [category, setCategory] = useState("mountain");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBar onSearch={setCategory} />
      <NavButtons onSelectCategory={setCategory} />
      <h2 className="text-center text-2xl font-semibold my-4 text-[#1A202C]">
        {category.charAt(0).toUpperCase() + category.slice(1)} Pictures
      </h2>
      <Gallery category={category} />
    
    </div>
    
  );
}
