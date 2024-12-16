export const Grid = ({ books }) => {
    // Ensure books is an array before calling map
    if (!Array.isArray(books)) {
      console.error('Expected "books" to be an array.');
      return null;  // or provide a fallback UI
    }
  
    return (
      <section className="flex-grow grid grid-cols-3 gap-5">
        {books.map((book, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg ${
              index % 2 === 0 ? "bg-greenTheme" : "bg-blueTheme"
            }`}
          >
            <img
              src={book.imageUrl}
              alt="test photo"
              className="w-60 h-60 rounded-lg"
            />
            <h3 className="mt-4 text-center text-lg">{book.title}</h3>
          </div>
        ))}
      </section>
    );
  };
  export default Grid;
  