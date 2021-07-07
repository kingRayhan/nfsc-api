import { BsBook } from "react-icons/bs";

export default {
  title: "Book",
  name: "book",
  type: "document",
  icon: BsBook,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        // TODO: Slug
      },
    },
    {
      name: "description",
      type: "text",
      rows: 10,
    },
    {
      title: "Publication name",
      name: "publication_name",
      type: "string",
    },
    {
      title: "ISBN",
      name: "isbn",
      type: "string",
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      title: "Unboxing videos",
      name: "unboxing_videos",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "unboxing" },
        },
      ],
    },
    {
      title: "Book Author",
      name: "author",
      type: "reference",
      to: { type: "author" },
    },
    {
      title: "Collection Edition",
      name: "connction_edition",
      type: "bookGallery",
    },
    {
      title: "Paperback Edition",
      name: "paperback_edition",
      type: "bookGallery",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "connction_edition.images[0]",
    },
  },
};
