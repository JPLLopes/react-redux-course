import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const App = () => {
  const [selection, setSelection] = useState(null);

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <div>
      <ButtonPage />
      <AccordionPage />
      <Dropdown
        options={options}
        value={selection}
        onChange={(option) => setSelection(option)}
      />
    </div>
  );
};

export default App;
