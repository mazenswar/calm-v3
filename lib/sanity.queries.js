// /lib/sanity.queries.js
import { groq } from "next-sanity";

export const POSTS_PAGE_SIZE = 20;

// List (exclude drafts, newest first). Project a usable image URL + metadata.
export const postsListQuery = /* groq */ `
*[_type == "post" && !(_id in path("drafts.**"))]
| order(coalesce(publishedAt, _createdAt) desc)[0...$size]{
  _id,
  title,
  excerpt,
  "slug": slug.current,
  // project asset fields you can use directly in <Image/>
  "mainImage": mainImage{
    "url": asset->url,
    "assetId": asset->_id,
    "ref": asset->_ref,
    // optional niceties if you want blur placeholders or sizing
    "lqip": asset->metadata.lqip,
    "dims": asset->metadata.dimensions {width, height, aspectRatio}
  }
}
`;

// Slugs for static paths (exclude drafts)
export const postSlugsQuery = groq`
*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)][].slug.current
`;

// Single post by slug, with same mainImage projection
export const postBySlugQuery = groq`
*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  _updatedAt,
  "mainImage": mainImage{
    "url": asset->url,
    "assetId": asset->_id,
    "ref": asset->_ref,
    "lqip": asset->metadata.lqip,
    "dims": asset->metadata.dimensions {width, height, aspectRatio}
  },
  author->{name, image},
  categories[]->{title, slug},
  body,
  seoTitle,
  seoDescription
}
`;
