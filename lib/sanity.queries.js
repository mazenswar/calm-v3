// File: /lib/sanity.queries.js
import { groq } from "next-sanity";

export const POSTS_PAGE_SIZE = 20; // keep, but not used by this test query

export const postsListQuery = /* groq */ `
  *[_type == "post" && !(_id in path("drafts.**"))]
  | order(coalesce(publishedAt, _createdAt) desc)[0...20]{
    _id,
    title,
    excerpt,
    "slug": slug.current
  }
`;

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  _updatedAt,
  mainImage,
  author->{name, image},
  categories[]->{title, slug},
  body,
  seoTitle,
  seoDescription,
}
`;
