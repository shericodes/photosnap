export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "content",
      title: "Page Sections",
      description: "Add, edit, and reorder sections",
      type: "array",
      of: [
        {
          type: "featureHero",
        },
      ],
    },
  ],
};
