import { Text } from "@chakra-ui/react";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Usuarios',
    description: 'Listado de Usuarios de la tienda',
   };
   
export default function UsuariosPage() {
    return (
        <div className="p-4">
            <Text
                as='b'
                fontSize='2xl'
            >
                Usuarios
            </Text>

            <Text
                className="pt-4"
            >
                Pagina de Control de Usuarios
            </Text>
        </div>
    );
}
