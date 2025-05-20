import { type SchemaTypeDefinition } from 'sanity'
import { author } from './auther'
import { avengers } from './avengers'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author , avengers],
}
