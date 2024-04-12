import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";

interface TagListProps {
  tags: TagType[];
  setFilter: (filter: string) => void;
}

export const TagList: React.FC<TagListProps> = ({ tags, setFilter }) => {
  return <Tags tags={tags} setFilter={setFilter} />;
};
