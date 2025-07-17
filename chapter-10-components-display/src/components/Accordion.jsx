import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
const Accordion = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedItem === index;

    const handleClick = (newIndex) => {
      setExpandedItem((current) => {
        if (current === newIndex) {
          return -1;
        } else {
          return newIndex;
        }
      });
    };

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.key}>
        <div
          className={
            "flex justify-between p-3 gray-50 border-b items-center cursor-pointer"
          }
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
