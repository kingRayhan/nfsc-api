export default {
  title: "Book Gallery",
  name: "bookGallery",
  type: "object",
  fields: [
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
