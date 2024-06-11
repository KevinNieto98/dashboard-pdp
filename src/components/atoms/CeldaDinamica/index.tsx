'use client'
import { useUIStore } from "@/store";
import { Button, Chip, Tooltip } from "@nextui-org/react";
import { TbEdit } from "react-icons/tb";

interface CeldaProps {
    value: string | number | boolean  | any;
}

export const CeldaDinamica = ({ value }: CeldaProps) => {
    const openModal = useUIStore((state) => state.openModal);

    const handleClick =()=>{
        const splitValue = value.split('[');
        const number = parseInt(splitValue[1].slice(0, -1)); 
        console.log('value',number);
        openModal()
 
         
    }
    if (typeof value === 'boolean') {
        return (
            <Chip className="capitalize" color={value ? "success" : "danger"} size="sm" variant="flat">
                {value ? "Active" : "Inactive"}
            </Chip>
        );
    }

    if (typeof value === 'string' && value.startsWith('#ACCION#')) {
        
        return (
            <div className="relative flex gap-2">
                <Tooltip content="Edit user">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <Button
                            onClick={handleClick}
                        >
                            <TbEdit />
                        </Button>
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