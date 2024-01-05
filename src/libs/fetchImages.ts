import type { SearchResultWithImages } from "@/models/Images";
import { SearchResultWithImagesSchema } from "@/models/Images";

export default async function fetchImages(url: string): Promise<SearchResultWithImages | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) {
      throw new Error("Fetching images failed");
    };

    const imagesResult: SearchResultWithImages = await res.json();

    // Parse data with Zod schema
    const parsedData=SearchResultWithImagesSchema.parse(imagesResult);

    if (parsedData.total === 0) {
      return undefined;
    };

    return parsedData;
  } catch(error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
}