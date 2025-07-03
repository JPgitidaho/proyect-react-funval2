export default function ImageCard({ url, alt }) {
  return (
    <div className="overflow-hidden shadow group">
      <img
        src={url}
        alt={alt}
        className="w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
  );
}
