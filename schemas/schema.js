// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import Book from "../models/Book/Book";
import BookGallery from "../models/Book/BookGallery";

import Category from "../models/Category";
import Author from "../models/Author";
import Unboxing from "../models/Review/Unboxing";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([Book, BookGallery, Category, Author, Unboxing]),
});
