
//! Funciona para exportar el csv 


const convertirCSV = (data:any) => {
    if (data.length === 0) {
        return ''; // Retorna una cadena vacía si el array está vacío
    }
    const headers = Object.keys(data[0]); // Obtiene las keys del primer objeto como los encabezados del CSV

    // Generar las filas del CSV
    const rows = data.map((item: any) => {
        return headers.map(header => {
            return item[header]; // Obtiene el valor correspondiente de cada propiedad del objeto
        }).join(','); // Une los valores con comas para formar una fila del CSV
    });

    // Unir los encabezados y las filas del CSV
    const csv = [headers.join(','), ...rows].join('\n');
    return csv;
};


export const ExportCSV = (data:any,nombreArchivo:string ) => {
    const csvData = convertirCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${nombreArchivo}.csv`);
    document.body.appendChild(link);
    link.click();
};

//Note: para llamarlos se utiliza la funcion ExportCSV(data,'nombre del archivo');
// la data debe ir en formato JSON 
/*
ejemplo de uso:
import {exportarCSV } from '@/lib'
const data =[
    {clave: 'valor'},
    {clave: 'valor'},
    {clave: 'valor'},
]

ExportarCSV(data,'MiArchivo');

*/