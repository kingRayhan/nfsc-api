import { BsCameraVideo } from "react-icons/bs";

export default {
  title: "Unboxing",
  name: "unboxing",
  type: "document",
  icon: BsCameraVideo,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Reviewer",
      name: "reviewer",
      type: "string",
    },
    {
      title: "Youtube video id",
      name: "youtube_id",
      type: "string",
    },
    {
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "reviewer",
      media: "thumbnail",
    },
  },
};
