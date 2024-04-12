import { useState } from "react";
import { TagType } from "./TagType";

export const Tag = ({ tag, setFilter }: { tag: TagType, setFilter: (filter: string) => void }) => {
  return (
    <button 
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`
      }}
      onClick={() => setFilter(tag.id)}>
        {tag.name.fr}
      </button>
  );
};

