import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { projectType } from "./projectType";
import { authorType } from "./authorType";
import { skillType } from "./skillType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, projectType, authorType, skillType]
};
