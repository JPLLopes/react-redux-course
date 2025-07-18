import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = () => {
    setIsOpen((current) => {
      return !current;
    });
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleSelect(option)}
      >
        {option.label}
      </div>
    );
  });

  const icon = isOpen ? <GoChevronDown /> : <GoChevronLeft />;

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {icon}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
