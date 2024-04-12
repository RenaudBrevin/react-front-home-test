import { Tag } from "./Tag";
import { TagType } from "./TagType";

interface TagsProps {
  tags: TagType[];
  setFilter: (filter: string) => void;
}

export const Tags: React.FC<TagsProps> = ({ tags, setFilter }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} setFilter={setFilter} />
      ))}
    </div>
  );
};
