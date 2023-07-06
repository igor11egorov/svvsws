import GraphQLJSON from 'graphql-type-json'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

/**
 * Resolve scalar type Date & JSON
 */
export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
      // TODO
      return value.toISOString() // Value send to the client
    },
    parseValue(value: string) {
      return new Date(value) // Value from the client
    },
    parseLiteral(ast) {
      // TODO
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null
    },
  }),
  JSON: GraphQLJSON,
}
