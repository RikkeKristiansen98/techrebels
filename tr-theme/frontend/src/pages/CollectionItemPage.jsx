export const CollectionItemPage = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-8 w-full min-h-screen p-8">
    {/* Left Section - Book Cover and Description */}
    <div className="flex flex-col items-center space-y-8">
      {/* Book Cover */}
      <div className="w-48 h-64 bg-gray-300 flex items-center justify-center">
        <img
          src="src/images/image1.jpg"
          alt="Book Cover"
          className="w-full h-full object-cover"
        />
      </div>
  
      {/* Description */}
      <div className="w-full bg-gray-200 p-4 text-center md:text-left">
        <h3 className="text-lg font-bold">Beskrivning</h3>
        <p className="text-sm mt-2">Beskrivning av boken</p>
      </div>
    </div>
  
    {/* Right Section - Title and Info */}
    <div className="flex flex-col items-center md:items-start justify-start">
      {/* Title and Info */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold">Tech för alla</h1>
        <p className="text-sm mt-2">Författare: </p>
      </div>
    </div>
  </div>
  
  );
};
export default CollectionItemPage;
