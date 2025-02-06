export interface Product {
  slug: {
    _type: "slug";
    current: string;
  };  
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[]; // Assuming image is an array, update if needed
  
  _id: string;
  name: string;
  price: number;
  _type: "product";
  description?: string;
  
  imageUrl?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  
  dimensions?: {
    height: string;
    width: string;
    depth: string;
  };
  
  inventory: number;
}
