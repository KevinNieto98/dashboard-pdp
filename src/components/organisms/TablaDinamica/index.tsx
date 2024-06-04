'use client'

import {  CeldaDinamica } from "@/components";
import {  Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

interface MyObject {
    [key: number]: any;
}

interface TablaDinamica {
    data : any[],
   dinamica :boolean
}


export const TablaDinamica = ({ data, dinamica }: TablaDinamica) => {
    let headers: string[] = [];
    let newData: any[] = [];
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    if (dinamica) {
        headers = [...Object.keys(data[0]).map(key => key.toUpperCase()), 'ACCIONES'];

        newData = data.map((obj: any) => {
            let newObj: MyObject = {};
            Object.keys(obj).forEach((key, index) => {
                newObj[index] = obj[key];
            });
            newObj[Object.keys(obj).length] = 'accion';
            return newObj;
        });
    }else{
        headers = [...Object.keys(data[0]).map(key => key.toUpperCase())];

        newData = data.map((obj: any) => {
            let newObj: MyObject = {};
            Object.keys(obj).forEach((key, index) => {
                newObj[index] = obj[key];
            });
            return newObj;
        });
    }

    return (
        <Table aria-label="Example table with custom cells">
            <TableHeader>
                {headers.map((header, index) => (
                    <TableColumn key={index} align="center">{header}</TableColumn>
                ))}
            </TableHeader>
            <TableBody>
                {newData.map((item: any) => (
                    <TableRow key={item[0]}>
                        {Object.values(item).map((value, index) => (
                            <TableCell key={index}>
                                <CeldaDinamica value={value} />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    );
}