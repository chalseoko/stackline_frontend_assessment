export const xTickLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export interface WeeklySales {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export interface Product {
    title: string;
    img: string;
    subtitle: string;
    tags: string[];
}


