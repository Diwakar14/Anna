export interface IClothing {
  /** @format int32 */
  id?: number;
  name?: string | null;
  mainCategory?: string | null;
  subCategory?: string | null;
  image?: string | null;
  link?: string | null;
  /** @format double */
  ratings?: number | null;
  /** @format double */
  noOfRatings?: number | null;
  discountPrice?: string | null;
  actualPrice?: string | null;
}
