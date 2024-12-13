import { useState } from "react";
import CollectionItemPage from "../pages/CollectionItemPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const Books = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);

  // Dummy array for book items (useful for demonstration)
  const books = new Array(9).fill({ title: "Title", imageUrl: "https://via.placeholder.com/150" });

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen m-[14%] mb-[6%]">
      <div className="mb-[4%]">
        <h1 className="relative text-2xl sm:text-3xl lg:text-6xl font-bold text-center z-10 text-gray-800 mb-[20%]">
          Böcker
        </h1>
      </div>
      <div className="flex gap-12 mb-10">
        <aside className="w-1/6">
          <h2 className="text-2xl mb-5 pb-2 border-b">Filter</h2>

          {/* Age Filter */}
          <div className={`mb-5 ${ageOpen ? "open" : ""}`}>
            <h4
              className="flex justify-between items-center text-lg font-bold cursor-pointer"
              onClick={() => setAgeOpen(!ageOpen)}
            >
              Ålder
              {ageOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </h4>
            <div className={`pl-5 ${ageOpen ? "block" : "hidden"}`}>
              <input type="checkbox" /> 5-11
              <input type="checkbox" /> 12-16
              <input type="checkbox" /> 16-20
            </div>
          </div>

          {/* Language Filter */}
          <div className={`mb-5 ${languageOpen ? "open" : ""}`}>
            <h4
              className="flex justify-between items-center text-lg font-bold cursor-pointer"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              Språk
              {languageOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </h4>
            <div className={`pl-5 ${languageOpen ? "block" : "hidden"}`}>
              <input type="checkbox" /> Svenska
              <input type="checkbox" /> Engelska
              <input type="checkbox" /> Spanska
            </div>
          </div>

          {/* Subject Filter */}
          <div className={`mb-5 ${subjectOpen ? "open" : ""}`}>
            <h4
              className="flex justify-between items-center text-lg font-bold cursor-pointer"
              onClick={() => setSubjectOpen(!subjectOpen)}
            >
              Ämne
              {subjectOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </h4>
            <div className={`pl-5 ${subjectOpen ? "block" : "hidden"}`}>
              <input type="checkbox" /> Programmering
              <input type="checkbox" /> Rymden
              <input type="checkbox" /> Djur
            </div>
          </div>
        </aside>

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
      </div>
    </div>
  
  );
};
