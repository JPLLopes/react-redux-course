import { useRef, useEffect, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(null);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      return document.removeEventListener("click", handler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
