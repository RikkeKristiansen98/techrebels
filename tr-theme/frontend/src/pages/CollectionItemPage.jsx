export const CollectionItemPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-row items-center w-full min-h-screen">
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
            <div className="w-full bg-gray-200 p-4">
              <h3 className="text-lg font-bold">Bokens titel igen kanske?</h3>
              <p className="text-sm mt-2">Beskrivning av boken</p>
            </div>
          </div>

          
          <div className="flex flex-col items-center">
            {/* Title and Info */}
            <div className="text-center">
              <h1 className="text-2xl font-bold">Bokens titel</h1>
              <p className="text-sm mt-2">
                Författare: 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CollectionItemPage;
