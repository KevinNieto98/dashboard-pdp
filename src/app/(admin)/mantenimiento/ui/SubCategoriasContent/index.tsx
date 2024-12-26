'use client'
import { Icon, TablaDinamica } from "@/components";
import { Button, Input } from "@nextui-org/react";



const data = [
    {
        id: 1,
        nombre: "Educativos",
        activo: true
    },
    {
        id: 2,
        nombre: "Manualidades",
        activo: false
    },
    {
        id: 3,
        nombre: "Rompecabezas",
        activo: true
    },
    {
        id: 4,
        nombre: "Juegos de Meza",
        activo: false
    },
]

export const SubCategoriasContent = () => {
    return (
        <div className="p-4">
            <div className="flex items-center space-x-4 mb-10">
                <Input
                    label="Sub-Categoria"
                    placeholder="Ingrese el nombre de la subcategoria"
                    type="text"
                />
                <Button
                    color="success"
                    className="text-white"
                    startContent={
                        <Icon
                            name="FaPlus"
                        />
                    }
                >
                    Agregar
                </Button>
            </div>
            <TablaDinamica dinamica={true} data={data} />
        </div>
    );
}
