import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  url,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
    "technologies": technologies[]->{
      _id,
      name,
      slug,
      icon,
      level,
      category,
      description,
      yearsExperience
    }
  }
`);

export const PROJECTS_SLUGS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
   _id,
  title,
  body,
  mainImage,
  publishedAt,
  url,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
  }
`);
