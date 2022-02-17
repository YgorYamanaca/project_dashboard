export interface SalesInterface {
  year: number,
  total: number,
  e_commerce: number,
}

export interface SalesDataInterface {
  category: string,
  sales: SalesInterface[],
}