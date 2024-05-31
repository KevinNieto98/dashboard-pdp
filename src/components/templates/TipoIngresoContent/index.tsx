'use client'
import { TablaDinamica } from "@/components";
import { Text } from "@chakra-ui/react";



const data = [
    {
        id: 1,
        nombre: "Diezmo",
        activo: true
    },
    {
        id: 2,
        nombre: "Ofrenda",
        activo: false
    },
    {
        id: 3,
        nombre: "Primicia",
        activo: true
    },
    {
        id: 4,
        nombre: "Promesa de Fe",
        activo: false
    }
]

export const TipoIngreso = () => {
    return (
        <div className="p-4">
            <Text
                as='b'
                fontSize='2xl'
            >
                Mantenimiento de Tipo de Ingreso
            </Text>

            <Text
                className="pt-4 pb-4"
            >
                Pagina para administrar los tipos de ingresos de la iglesia, puedes seleccionar los vigentes.
            </Text>


            <TablaDinamica data={data}/>

        </div>
    );
}
