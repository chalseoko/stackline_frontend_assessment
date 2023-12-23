export const xTickLabels: string[] = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
]

export interface WeeklySales {
  weekEnding: string
  retailSales: number
  wholesaleSales: number
  unitsSold: number
  retailerMargin: number
}

export interface Item {
  title: string
  img: string
  subtitle: string
  tags: string[]
}
