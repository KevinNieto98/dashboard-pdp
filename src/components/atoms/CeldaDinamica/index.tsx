'use client'

import { Chip, TableCell } from "@nextui-org/react";
interface CeldaProps {
    value: string | number | boolean | null | any;
}


export const CeldaDinamica = ({ value }: CeldaProps) => {
    return (
        <TableCell >
            <div>
                <p>{value}</p>

            </div>
        </TableCell>
    );
}