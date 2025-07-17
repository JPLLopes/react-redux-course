import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedItem === index;

    return (
      <div key={item.key}>
        <div onClick={() => setExpandedItem(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
