import DropDown from "./DropDown";
import { useState } from "react";

const cuisineOptions = [
  { label: "Italian", value: "ita" },
  { label: "Japanese", value: "jp" },
  { label: "Chinese", value: "ch" },
  { label: "Mexican", value: "mx" },
  { label: "American", value: "am" },
  { label: "Indian", value: "in" },
  { label: "Thai", value: "th" },
  { label: "French", value: "fr" },
  { label: "Spanish", value: "sp" },
  { label: "Greek", value: "gr" },
  { label: "Turkish", value: "tr" },
  { label: "Korean", value: "kr" },
  { label: "Vietnamese", value: "vn" },
  { label: "Lebanese", value: "lb" },
  { label: "Brazilian", value: "br" },
  { label: "Moroccan", value: "ma" },
  { label: "Russian", value: "ru" },
  { label: "Swedish", value: "se" },
  { label: "Dutch", value: "nl" },
  { label: "Belgian", value: "be" },
  { label: "Cuban", value: "cu" },
];

const gameOptions = [
  { label: "League of Legends", value: "lol" },
  { label: "Valorant", value: "valorant" },
  { label: "Call of Duty", value: "cod" },
  { label: "Counter-Strike", value: "csgo" },
  { label: "Marvel Rivals", value: "mr" },
];

const baseStyles = {
  padding: "10%",
  fontFamily: "Arial",
  backgroundColor: "#191970",
  color: "#F0FFFF",
  position: "relative",
  height: "100vh",
  display: "flex",
  gap: "300px",
  justifyContent: "center",
};

function App() {
  const [singleSelection, setSingleSelection] = useState([]);
  const [multiSelection, setMultiSelection] = useState([]);

  return (
    <div style={baseStyles}>
      <div>
        <DropDown
          label="Select your favorite cuisine type"
          options={cuisineOptions}
          placeholder="Select a cuisine"
          onChange={setSingleSelection}
          value={singleSelection}
          isMultiSelect={false}
        />
      </div>

      <div>
        <DropDown
          label="Select your favorite game(s)"
          options={gameOptions}
          placeholder="Select a game"
          onChange={setMultiSelection}
          value={multiSelection}
          isMultiSelect={true}
        />
      </div>
    </div>
  );
}

export default App;
