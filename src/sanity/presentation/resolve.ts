import {
  defineLocations,
  PresentationPluginOptions
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other projects types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current"
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/projects/${doc?.slug}`
          },
          { title: "Projects index", href: `/projects` }
        ]
      })
    })
  }
};
