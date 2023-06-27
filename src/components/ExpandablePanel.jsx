/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="bg-gray-100 p-2 rounded-md flex flex-row justify-between items-center">
        {header}
        <div onClick={handleClick} className="cursor-pointer">
          {isExpanded ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </div>

      {isExpanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
