'use client'
import { TablaDinamica } from "@/components";
import { Text } from "@chakra-ui/react";



const data = [
    {
        id: 1,
        nombre: "Diezmo",
        activo: true,
        descripcion: 'Descripcion de diezmo',
        usuarioIngresa: 'Kevin '
    },
    {
        id: 2,
        nombre: "Ofrenda",
        activo: false,
        descripcion: 'Descripcion de Ofrenda',
        usuarioIngresa: 'Kevin '

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
