import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { MarcasContent } from "./ui";
import { AlertRegion } from "@/components";

export const metadata: Metadata = {
    title: 'Marcas',
    description: 'Marcas de Productos',
   };

export default function MarcasPage() {
    return (
        <div className="p-4">
            <AlertRegion/> 
            <Text
                as='b'
                fontSize='2xl'
            >
                Marcas
            </Text>

            <Text
                className="pt-4"
            >
                Pagina de Control de Marcas
            </Text>
            <MarcasContent/>
        </div>
    );
}
