import { Manga } from "./Manga";

export const MangaGrid = (props) => {
  const mangas = props.mangas;

  return (
    <div className="p-4 xl:grid-cols-3 grid md:grid-cols-2 gap-4">
      {mangas.map((manga, idx) => {
        return <Manga manga={manga} />;
      })}
    </div>
  );
};
