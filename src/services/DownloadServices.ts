// src/services/DownloadService.ts
import * as XLSX from 'xlsx';
import type { Product } from '../types';

export function downloadProductListAsExcel(products: Product[]) {
    const worksheetData = products.map(product => ({
        ID: product.id,
        Nombre: product.name,
        Precio: product.price,
        Disponible: product.availability ? 'Sí' : 'No',
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Productos');

    XLSX.writeFile(workbook, 'productos.xlsx');
}
