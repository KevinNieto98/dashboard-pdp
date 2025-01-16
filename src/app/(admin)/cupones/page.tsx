import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { AlertRegion } from "@/components";
import { CuponesContent } from "./ui";

export const metadata: Metadata = {
    title: 'Cupones',
    description: 'Pagina de Mantenimiento de Cupones',
   };

export default function CuponesPage() {
    return (
        <div className="p-4">
            <AlertRegion/> 
            <Text
                as='b'
                fontSize='2xl'
            >
                 Cupones
            </Text>

            <Text
                className="pt-4"
            >
                Pagina de Mantenimiento de Cupones
            </Text>
            <CuponesContent/>
        </div>
    );
}
