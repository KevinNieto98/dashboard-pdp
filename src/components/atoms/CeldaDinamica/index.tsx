'use client'
import { Chip, Tooltip } from "@nextui-org/react";
import { TbEdit } from "react-icons/tb";

interface CeldaProps {
    value: string | number | boolean | null | any;
}

export const CeldaDinamica = ({ value }: CeldaProps) => {
    if (typeof value === 'boolean') {
        return (
            <Chip className="capitalize" color={value ? "success" : "danger"} size="sm" variant="flat">
                {value ? "Active" : "Inactive"}
            </Chip>
        );
    }

    if (value === 'accion') {
        return (
            <div className="relative flex gap-2">
                <Tooltip content="Edit user">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <TbEdit />
                    </span>
                </Tooltip>
            </div>
        )
    }

    return (
        <div>
            <p>{String(value)}</p>
        </div>
    );
}