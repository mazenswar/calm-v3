import { groq } from "next-sanity";

export const POSTS_PAGE_SIZE = 10;

export const postsListQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  author->{name},
}[($page * $size)...(($page + 1) * $size)]
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
