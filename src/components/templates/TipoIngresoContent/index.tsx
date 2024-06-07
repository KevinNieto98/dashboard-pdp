'use client'
import { TablaDinamica } from "@/components";
import { Text } from "@chakra-ui/react";



const data = [
    {
        id: 1,
        nombre: "Diezmo",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 2,
        nombre: "Ofrenda2",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 3,
        nombre: "Diezmo3",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 4,
        nombre: "Ofrend4",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 5,
        nombre: "Diezmo5",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 6,
        nombre: "Ofrenda6",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 7,
        nombre: "Diezmo7",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 8,
        nombre: "Ofrenda8",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 9,
        nombre: "Diezmo9",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 10,
        nombre: "Ofrenda10",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 11,
        nombre: "Diezmo11",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 12,
        nombre: "Ofrenda12",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 13,
        nombre: "Diezmo13",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 14,
        nombre: "Ofrenda14",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 15,
        nombre: "Diezmo15",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 16,
        nombre: "Ofrenda16",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 17,
        nombre: "Diezmo17",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    {
        id: 18,
        nombre: "Ofrenda18",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin ',
        algoMas: 'algo mas',
        algoMas2: 'algo mas',
        algoMas3: 'algo mas',
        algoMas4: 'algo mas',
    },
    
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


            <TablaDinamica dinamica={true} data={data}/>

        </div>
    );
}
