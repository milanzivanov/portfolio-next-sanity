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
      type: "string",
      title: "Icon",
      description: "Technology logo shown next to the skill name on the site.",
      options: {
        list: [
          { title: "React", value: "react" },
          { title: "Next.js", value: "nextdotjs" },
          { title: "TypeScript", value: "typescript" },
          { title: "JavaScript", value: "javascript" },
          { title: "Tailwind CSS", value: "tailwindcss" },
          { title: "HTML5", value: "html5" },
          { title: "CSS3", value: "css3" },
          { title: "Node.js", value: "nodedotjs" },
          { title: "Sanity", value: "sanity" },
          { title: "Supabase", value: "supabase" },
          { title: "Prisma", value: "prisma" },
          { title: "Clerk", value: "clerk" },
          { title: "Git", value: "git" },
          { title: "GitHub", value: "github" },
          { title: "Figma", value: "figma" },
          { title: "Vercel", value: "vercel" },
          { title: "AI / ML", value: "ai" }
        ]
      }
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
