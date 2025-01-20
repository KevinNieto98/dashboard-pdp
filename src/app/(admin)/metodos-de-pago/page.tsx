import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import {  MetodosContent } from "./ui";
import { AlertRegion } from "@/components";

export const metadata: Metadata = {
    title: 'Metodos de Pago',
    description: 'Metodos de Pago de la Tienda',
   };

export default function MarcasPage() {
    return (
        <div className="p-4">
            <AlertRegion/> 
            <Text
                as='b'
                fontSize='2xl'
            >
                Metodos de Pago
            </Text>

            <Text
                className="pt-4"
            >
                Pagina de Control de Metodos de Pago
            </Text>
            <MetodosContent/>
        </div>
    );
}
