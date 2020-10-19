/* eslint-disable camelcase */
export interface Item {
  category: string;
  comments: {
    id: number;
    content: string;
    user_id: number;
    product_id: number;
    created_at: string;
    update_at: string;
  }[];
  condition: string;
  created_at: string;
  description: string;
  id: number;
  image_url: string;
  name: string;
  prefecture: string;
  price: number;
  shipping_fee: string;
  shipping_day: number;
  shipping_method: string;
  status: string;
  user: { name: string | undefined };
  user_id: number;
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
  uid: number;
  name: string;
}

export interface Search {
  searchWord: string;
  searchWordArray: string[];
  category: string;
}

export interface Store {
  products: Products;
  users: Users;
  search: Search;
}

export interface Navigation {
  navigation: {
    dispatch: (pushAction: unknown) => void;
    addListener: (s: string, f: () => void) => void;
    navigate: (s: string) => void;
  };
  route: {
    params: Item;
  };
}
