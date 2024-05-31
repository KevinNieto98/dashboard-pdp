'use client'

import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { TbEdit } from "react-icons/tb";

export const TablaDinamica = ({ data }: any ) =>  {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    const headers = [...Object.keys(data[0]).map(key => key.toUpperCase())];
    console.log('headers', headers);

    const newData = data.map((obj:any) => {
        return {
            0: obj.id,
            1: obj.nombre,
            2: obj.activo
        };
    });

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
                                <div>
                                    <p>{String(value)}</p>
                                </div>
                             </TableCell>
                        ))}
                        
                    </TableRow>
                ))} 
            </TableBody>
        </Table>
    );
}