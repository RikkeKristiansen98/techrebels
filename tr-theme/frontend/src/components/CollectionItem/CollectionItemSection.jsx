import { useLocation } from "react-router-dom";

export const CollectionItemSection = () => {
    const location = useLocation();
    const item = location.state?.item;
    const borderElement = "http://techforalla.se/wp-content/uploads/2025/02/carousel-border-e1739376905245.png";
    const backgroundElement = "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-4.png";

    if (!item) {
        return <p className="text-white">Item not found</p>;
    }

    return (
        <div className="bg-pinkTheme relative flex flex-col justify-center items-center h-auto w-full py-[8%] xxs:px-3 lg:flex-row lg:items-start lg:justify-between xxl:px-32">
            {/* Border element top */}
            <img
                src={borderElement}
                loading="lazy"
                alt="Hero Element"
                className="absolute top-0 right-0 z-0 w-full h-auto"
            />
          
            {/* book img & background img */}
            <div className="relative flex items-center justify-center w-full xxs:mt-16">
                <img
                    src={item.imageSrc}
                    alt="Book Cover"
                    className="xxs:w-[245px] md:w-[270px] lg:w-[350px] xxl:w-[230px] object-cover relative z-20 overflow-visible"
                />
                    <img
                src={backgroundElement}
                alt="background Element"
                className="absolute z-10 w-full h-auto xxs:w-[400px] lg:w-[500px] object-cover"
            />
            </div>

            {/* Text container */}
            <div className="relative w-full h-auto flex flex-col justify-center py-16 lg:px-10">
                {/* Title and Author */}
                <div className="flex flex-col justify-center xxs:items-center lg:items-start lg:mb-0">
                    <h1 className="text-3xl xxs:text-center xxs:mt-4 md:mt-8 md:text-4xl lg:text-start text-whiteTheme font-bold mb-5 drop-shadow-lg">{item.title}</h1>
                    <p className="text-xl md:text-3xl text-whiteTheme">{item.tagline}</p>
                </div>

                {/* Description Section with dashed border */}
                <div className="w-full xxs:mt-5 p-6 border-dashed border-4 border-whiteTheme">
                    <p className="text-whiteTheme leading-relaxed">
                        {item.description} </p>
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
