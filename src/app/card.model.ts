export interface Card {
  id: string;
  name: string;
  color: string;
  type: string;
  rarity: string;
  set: string;
  artist: string;
  number: string;
  price: number;
  imageUrl: string;
  text?: string;
  supertypes?: string;
}
