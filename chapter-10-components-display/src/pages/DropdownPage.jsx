import Dropdown from "./../components/Dropdown";
import { useState } from "react";

const DropdownPage = () => {
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
      <Dropdown
        options={options}
        value={selection}
        onChange={(option) => setSelection(option)}
      />
    </div>
  );
};

export default DropdownPage;
