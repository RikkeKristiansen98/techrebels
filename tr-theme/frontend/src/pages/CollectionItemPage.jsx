export const CollectionItemPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-36">
      {/* Top Section */}
      <div className="relative w-full h-auto flex justify-center py-16 ">
        {/* Title and Author */}
        <div className="flex flex-col items-end justify-center space-y-4 w-1/3 pr-5">
          <h1 className="header-1 text-7xl font-bold text-gray-800">Book Title</h1>
          <p className="header-3 text-3xl text-gray-600">John Doe</p>
        </div>

        {/* Book Cover with Circle */}
        <div className="relative flex items-center justify-center w-1/3">
          {/* Circle Background */}
          <div className="absolute w-[32rem] h-[32rem] bg-orangeTheme rounded-full shadow-lg -left-2"></div>

          {/* Book Cover */}
          <img
            src="src/images/bookOne.png"
            alt="Book Cover"
            className="h-[500px] object-cover relative z-10 overflow-visible"
          />
        </div>

        {/* Tagline */}
        <div className="flex flex-col items-start justify-center space-y-4 w-1/3 pl-5">
          <p className="header-3 text-2xl text-gray-600 font-semibold">
            "A timeless classic that resonates."
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-6xl mt-16 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus alias adipisci, recusandae voluptate quibusdam dolorem dolore, quaerat, amet explicabo laborum commodi accusantium excepturi ad dignissimos eum nihil itaque quas culpa consequatur beatae corporis illum! Laboriosam natus modi eveniet, itaque, blanditiis veniam nihil error quia distinctio asperiores laborum, aliquid praesentium. Odio aliquid deserunt ratione eaque assumenda culpa facere perspiciatis similique!
        </p>
      </div>
    </div>
  );
};

export default CollectionItemPage;
