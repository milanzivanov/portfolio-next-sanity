import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name"
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" }
    }),
    defineField({
      name: "icon",
      type: "image",
      title: "Icon",
      options: { hotspot: true }
    }),
    defineField({
      name: "level",
      type: "string",
      title: "Proficiency Level",
      options: {
        list: ["Beginner", "Intermediate", "Expert"]
      }
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category"
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description"
    }),
    defineField({
      name: "yearsExperience",
      type: "number",
      title: "Years of Experience"
    })
  ]
});
