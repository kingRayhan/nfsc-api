import { BsPeopleFill } from "react-icons/bs";

export default {
  title: "Author",
  name: "author",
  type: "document",
  icon: BsPeopleFill,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "text",
      rows: 10,
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
