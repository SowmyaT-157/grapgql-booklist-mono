import { books } from "./staticData.js";

export const resolvers = {
  Query: {
    books: () => books,
  },
};