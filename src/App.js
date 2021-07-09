import { useEffect, useState } from "react";
import { getHotManga } from "./api";

import { MangaGrid } from "./components/MangaGrid";

export default function App() {
  const [mangas, setMangas] = useState([]);

  const getMangas = async () => {
    try {
      const data = await getHotManga();
      setMangas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMangas();
  }, []);

  return (
    <div className="max-w-2xl flex flex-col mx-auto p-4 ">
      <h1 className="text-2xl text-center">
        <span role="img" aria-label="fire">
          🔥
        </span>
        Hot Mangas{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </h1>
      <MangaGrid mangas={mangas} />
    </div>
  );
}
