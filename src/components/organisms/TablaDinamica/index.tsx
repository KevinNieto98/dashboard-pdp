'use client'

import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { TbEdit } from "react-icons/tb";

export const TablaDinamica = ({ data }: any ) =>  {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    const headers = [...Object.keys(data[0]).map(key => key.toUpperCase()), 'ACCIONES'];
    console.log('headers', headers);

    return (
        <Table aria-label="Example table with custom cells">
            <TableHeader>
                {headers.map((header, index) => (
                    <TableColumn key={index} align="center">{header}</TableColumn>
                ))}
            </TableHeader>
            <TableBody>
                {data.map((item: any, index: any) => (
                    <TableRow key={index}>
                        <TableCell>
                            <div>
                                <p>{item.id}</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div>
                                <p>{item.nombre}</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div>
                                <Chip className="capitalize" color={item.activo ? "success" : "danger"} size="sm" variant="flat">
                                    {item.activo ? "Active" : "Inactivo"}
                                </Chip>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="relative flex gap-2">
                                <Tooltip content="Edit user">
                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <TbEdit />
                                    </span>
                                </Tooltip>
                            </div>
                        </TableCell>
                    </TableRow>
                ))} 
                 {/* <TableRow >
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>5</TableCell>
                 </TableRow> */}
            </TableBody>
        </Table>
    );
}
