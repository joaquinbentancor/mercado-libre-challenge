declare global {
  interface Window {
    __INITIAL_DATA__: any;
  }
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: string;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  address: string
  description: string;
}

export interface ItemsResult {
  categories: string[];
  items: Item[];
}
