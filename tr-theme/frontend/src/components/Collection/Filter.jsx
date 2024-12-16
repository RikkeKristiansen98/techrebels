import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";


export const Filter = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);

  return (
    <>
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
    </>
  );
};
export default Filter;
