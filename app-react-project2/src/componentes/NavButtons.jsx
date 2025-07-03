export default function NavButtons({ onSelectCategory }) {
  const categories = [ "mountain","landscape", "beach", "forest", "sunset"];

  return (
    <div className="flex justify-center flex-col md:flex-row gap-4 m-4">
      {categories.map((cat) => (
        <button
         key={cat}
          onClick={() => onSelectCategory(cat)}
          className="bg-[#1A202C] text-white px-4 py-1 rounded hover:bg-[#2C5282] transition"
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
