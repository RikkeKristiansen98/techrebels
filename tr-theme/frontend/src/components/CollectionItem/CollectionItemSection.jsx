export const CollectionItemSection = () => {
    const borderElement = "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-1-e1740393062433.png";

    return (
        <div className="bg-pinkTheme relative flex flex-col justify-center items-center h-auto w-full xxs:pt-20 xxs:px-3 lg:flex-row lg:items-start lg:justify-between py-10 md:py-[10%] lg:py-[9%] lg:px-[12%]">
            {/* Border element top */}
            <img
                src={borderElement}
                alt="Hero Element"
                className="absolute top-0 right-0 z-0 w-full h-auto"
            />

            {/* Book Cover */}
            <div className="relative flex items-center justify-center w-full lg:w-1/2">
                <img
                    src="src/images/bookOne.png"
                    alt="Book Cover"
                    className="lg:h-[500px] xxs:h-[400px] object-cover relative z-10 overflow-visible"
                />
            </div>

            {/* Text container */}
            <div className="relative w-full h-auto flex flex-col justify-center py-16 lg:w-1/2 lg:px-5">
                {/* Title and Author */}
                <div className="flex flex-col justify-center pr-5 mb-6 xxs:items-center lg:items-start lg:mb-0">
                    <h1 className="text-5xl md:text-6xl text-whiteTheme font-bold mb-5 drop-shadow-lg">Book Title</h1>
                    <p className="text-xl md:text-3xl text-whiteTheme">John Doe</p>
                </div>

                {/* Description Section with dashed border */}
                <div className="w-full mt-6 p-6 border-dashed border-4 border-whiteTheme">
                    <h2 className="text-2xl font-bold text-whiteTheme mb-4">Description</h2>
                    <p className="text-whiteTheme leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus alias adipisci, recusandae voluptate quibusdam dolorem dolore, quaerat, amet explicabo laborum commodi accusantium excepturi ad dignissimos eum nihil itaque quas culpa consequatur beatae corporis illum! Laboriosam natus modi eveniet, itaque, blanditiis veniam nihil error quia distinctio asperiores laborum, aliquid praesentium. Odio aliquid deserunt ratione eaque assumenda culpa facere perspiciatis similique!
                    </p>
                </div>
            </div>

            {/* Border element bottom */}
            <img
                src={borderElement}
                alt="Hero Element"
                className="absolute bottom-0 right-0 z-0 w-full h-auto transform scale-y-[-1]"
            />
        </div>
    );
};

export default CollectionItemSection;
