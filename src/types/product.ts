export interface Product {
  id: number;
  name: string;
  popularityScore: number;
  weight: number;
  images: {
    yellow: string;
    rose: string;
    white: string;
  };
  price: number;
}

export type ColorOption = 'yellow' | 'rose' | 'white';

export interface ColorInfo {
  name: string;
  hex: string;
  key: ColorOption;
}

