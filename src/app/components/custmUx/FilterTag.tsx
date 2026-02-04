// ./custmUx/FilterTag/FilterTag.tsx
import React from "react";

interface FilterTagProps {
  id: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  label: string;
  data?: any[];
  selected?: any;
  setSelected?: (val: any) => void;
}

const FilterTag: React.FC<FilterTagProps> = ({
  id,
  activeId,
  setActiveId,
  label,
  data = [],
  selected,
  setSelected,
}) => {
  const isActive = activeId === id;

  const handleClick = () => {
    setActiveId(isActive ? null : id);
  };

  return (
    <div
      style={{
        display: "inline-block",
        padding: "4px 8px",
        margin: "4px",
        cursor: "pointer",
        borderRadius: "4px",
        backgroundColor: isActive ? "#007bff" : "#e0e0e0",
        color: isActive ? "#fff" : "#000",
      }}
      onClick={handleClick}
    >
      {label}
      {setSelected && selected !== undefined && (
        <span style={{ marginLeft: "8px" }}>{selected?.toString()}</span>
      )}
    </div>
  );
};

export default FilterTag;
