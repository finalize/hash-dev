import Tag from "../../db/Model/Tag";

export const createTag = ({ name }: any) => {
  const tag = new Tag({
    name
  });

  return tag.save();
};
