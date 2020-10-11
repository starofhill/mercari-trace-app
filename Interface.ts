/* eslint-disable camelcase */
export interface Item {
  created_at: string;
  description: string;
  id: number;
  image_url: string;
  price: number;
  name: string;
  updated_at: string;

  status?: string;
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
  list: Item[];
}

export interface Users {
  headers: {
    accessToken: string;
    client: string;
    uid: string;
  };
  isSignedIn: boolean;
  uid: string;
  name: string;
}

export interface Store {
  products: Products;
  users: Users;
}

export interface Navigation {
  navigation: {
    dispatch: (pushAction: unknown) => void;
    addListener: (s: string, f: () => void) => void;
  };
  route: {
    params: Item;
  };
}
