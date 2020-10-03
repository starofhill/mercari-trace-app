export interface Item {
  created_at: string;
  description: string;
  id: number;
  image_url: string | null;
  price: number;
  name: string;
  updated_at: string;

  likes?: number;
  comments?: number;
  category?: string;
  condition?: string;
  shippingCharges?: string;
  deliveryArea?: string;
  deliveryDate?: string;
  method?: string;
  brand?: string;
}

export interface Products {
  list: [item: Item];
}

export interface Users {
  isSignedIn: boolean;
  uid: string;
  username: string;
}

export interface Store {
  products: Products;
  users: Users;
}

export interface Navigation {
  navigation: {
    dispatch: (pushAction: any) => void;
  };
  route: {
    params: Item;
  };
}
