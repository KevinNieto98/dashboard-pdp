import { Text } from "@chakra-ui/react";

export const TipoIngreso = () =>  {
    return (
        <div className="p-4">
            <Text
                as='b'
                fontSize='2xl'
            >
                Mantenimiento de Tipo de Ingreso
            </Text>

            <Text
                className="pt-4"
            >
                Pagina para administrar los tipos de ingresos de la iglesia, puedes seleccionar los vigentes.
            </Text>
        </div>
    );
}
