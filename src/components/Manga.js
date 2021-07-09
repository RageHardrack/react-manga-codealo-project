export const Manga = ({ manga }) => {
  const { attributes } = manga;
  const title = attributes.titles["en"] || attributes.titles["ja_jp"];
  const img = attributes.posterImage?.tiny;
  return (
    <div className="p-2 shadow-xl rounded bg-blue-300">
      <div className="flex flex-row space-x-4 justify-start items-start">
        <img src={img} alt={title} className="object-scale-down" />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div>{attributes.description}</div>
        </div>
      </div>
    </div>
  );
};
