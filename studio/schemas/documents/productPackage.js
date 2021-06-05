export default {
  name: "productPackage",
  title: "Product Package",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "pricePerMonth",
      title: "Price Per Month",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: "pricePerYear",
      title: "Price Per Year",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    },
  ],
};
