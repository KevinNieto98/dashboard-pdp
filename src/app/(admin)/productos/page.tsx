import { Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Productos',
    description: 'Listado de Productos de la tienda',
   };

   
export default function ProductosPage() {
    return (
        <div className="p-4">
            <Text
                as='b'
                fontSize='2xl'
            >
                Productos
            </Text>

            <Text
                className="pt-4"
            >
                Pagina de Control de Productos
            </Text>
        </div>
    );
}
