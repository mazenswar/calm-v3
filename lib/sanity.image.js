import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity.client";

export const urlFor = (source) =>
	createImageUrlBuilder({ projectId, dataset }).image(source);
