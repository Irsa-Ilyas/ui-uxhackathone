export interface Product {
  slug: any;
  image: any;
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
    slug:{
      _type:"slug";
      current:string
    }
 
  };
  dimensions?: {
    height: string; 
    width: string;
    depth: string;
  };
  inventory:number
}
