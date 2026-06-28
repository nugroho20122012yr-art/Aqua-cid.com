export interface Product {
  id: string;
  name: string;
  category: 'Botol' | 'Kerdusan' | 'Galon';
  description: string;
  volume: string;
  imageFallback: string;
  link: string;
  badge?: string;
  priceEstimate?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

export interface HydrationResult {
  liters: number;
  bottles600ml: number;
  glasses250ml: number;
}
