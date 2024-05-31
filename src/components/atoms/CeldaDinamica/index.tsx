'use client'

import { Chip, TableCell } from "@nextui-org/react";
interface CeldaProps {
    index: number;
    value: any;
}


export const CeldaDinamica = ({index, value}:CeldaProps ) =>  {
    return (
        <TableCell >
        <div>
                <p>{value }</p>
            
        </div>
    </TableCell>
    );
}